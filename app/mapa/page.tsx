"use client";

import { ChapterCarousel } from "@/components/navigation/ChapterCarousel";
import { InteractiveMap } from "@/components/navigation/InteractiveMap";
import { getAllBooks } from "@/lib/content/books";
import { useProgress } from "@/lib/hooks/useProgress";
import { useState } from "react";

export default function MapaPage() {
  const { progress, isLoaded } = useProgress();
  const [view, setView] = useState<"map" | "chapters">("map");
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const books = getAllBooks();
  const book1 = books[0];

  if (!isLoaded) {
    return (
      <main className="w-full h-screen flex items-center justify-center bg-[#fafafa]">
        <div className="text-lz-prime animate-pulse">Cargando Mapa...</div>
      </main>
    );
  }

  const handleLocationClick = (chapterNumber: number) => {
    setSelectedChapter(chapterNumber);
    setView("chapters");
  };

  const unlockedChapters = progress.unlockedChapters[book1.id] || [];

  // For the carousel, we show the chapters available around the selected one
  // or just the unlocked ones? User said: "clicking this location the map dissapears or the page scrolls downards to see the chapter selector which would only allow chapter 1 for now for example"
  const availableChapters = book1.chapters.filter((ch) =>
    unlockedChapters.includes(ch.number),
  );

  return (
    <main className="relative w-full h-screen bg-[#fafafa] pt-4 overflow-hidden">
      <div className="relative w-[95vw] h-[85vh] mx-auto transition-all duration-1000">
        <div
          className={`absolute inset-0 transition-all duration-1000 transform ${
            view === "map"
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <h1 className="text-3xl font-display text-lz-prime">
              Mapa de Lúzerin
            </h1>
            <InteractiveMap
              unlockedChapters={unlockedChapters}
              onLocationClick={handleLocationClick}
            />
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-all duration-1000 transform ${
            view === "chapters"
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full">
            <button
              type="button"
              onClick={() => setView("map")}
              className="self-start mb-4 text-lz-prime hover:underline flex items-center gap-2"
            >
              ← Volver al Mapa
            </button>
            <ChapterCarousel
              chapters={availableChapters}
              bookId={book1.id}
              initialIndex={Math.max(
                0,
                availableChapters.findIndex(
                  (ch) => ch.number === selectedChapter,
                ),
              )}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
