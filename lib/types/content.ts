// Content Type Definitions for Lúzerin E-Book Platform

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  coverImage: string;
  description: string;
  chapters: Chapter[];
  totalWords: number;
  publishDate?: string;
}

export interface Chapter {
  id: string;
  bookId: string;
  number: number;
  title: string;
  content: string;
  image?: string;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface GlossaryEntry {
  id: string;
  name: string;
  category: "character" | "place" | "item" | "term" | "creature";
  description: string;
  image?: string;
  relatedTerms?: string[];
  firstAppearance?: string; // chapter reference
  aliases?: string[];
}

export interface Team {
  id: string;
  name: string;
  shield: string;
  description?: string;
  color?: string;
}

export interface ReadingProgress {
  bookId: string;
  chapterId: string;
  progress: number; // 0-100
  lastRead: Date;
}
