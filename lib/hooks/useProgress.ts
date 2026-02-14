"use client";

import { useEffect, useState } from "react";

const PROGRESS_KEY = "luzerin_progress";

interface ProgressState {
  unlockedChapters: Record<string, number[]>; // bookId -> array of chapter numbers
  unlockedGlossaryIds: string[];
}

const initialState: ProgressState = {
  unlockedChapters: {
    "book-1": [1], // Only first chapter unlocked initially
  },
  unlockedGlossaryIds: [],
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(initialState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const saveProgress = (newState: ProgressState) => {
    setProgress(newState);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(newState));
  };

  const unlockChapter = (bookId: string, chapterNumber: number) => {
    const chapters = progress.unlockedChapters[bookId] || [];
    if (!chapters.includes(chapterNumber)) {
      const newState = {
        ...progress,
        unlockedChapters: {
          ...progress.unlockedChapters,
          [bookId]: [...chapters, chapterNumber].sort((a, b) => a - b),
        },
      };
      saveProgress(newState);
    }
  };

  const unlockGlossaryEntry = (id: string | string[]) => {
    const idsToUnlock = Array.isArray(id) ? id : [id];
    const newIds = [
      ...new Set([...progress.unlockedGlossaryIds, ...idsToUnlock]),
    ];

    if (newIds.length !== progress.unlockedGlossaryIds.length) {
      const newState = {
        ...progress,
        unlockedGlossaryIds: newIds,
      };
      saveProgress(newState);
    }
  };

  const isChapterUnlocked = (bookId: string, chapterNumber: number) => {
    return progress.unlockedChapters[bookId]?.includes(chapterNumber) || false;
  };

  const isGlossaryUnlocked = (id: string) => {
    return progress.unlockedGlossaryIds.includes(id);
  };

  return {
    progress,
    isLoaded,
    unlockChapter,
    unlockGlossaryEntry,
    isChapterUnlocked,
    isGlossaryUnlocked,
  };
}
