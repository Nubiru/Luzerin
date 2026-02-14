"use client";

import { ArrowUp, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Book, Chapter } from "@/lib/types/content";

interface ChapterReaderProps {
  book: Book;
  chapter: Chapter;
}

export function ChapterReader({ book, chapter }: ChapterReaderProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Find current chapter index to determine previous and next chapters
  // We use chapter.number matching, assuming chapters are sorted or indexed correctly
  const currentIndex = book.chapters.findIndex(
    (ch) => ch.number === chapter.number,
  );
  const prevChapter = currentIndex > 0 ? book.chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < book.chapters.length - 1
      ? book.chapters[currentIndex + 1]
      : null;

  useEffect(() => {
    const handleScroll = () => {
      // Use window.scrollY for the main document scroll
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-lz-second">
      {/* Navigation Bar (Sticky Top) */}
      <div className="sticky top-0 z-40 w-full bg-lz-second/95 backdrop-blur shadow-sm border-b border-lz-terc/20 px-4 py-3 flex justify-between items-center transition-all duration-300">
        <Link
          href={`/lectura/${book.id}`}
          className="text-lz-cuart hover:text-white flex items-center gap-2 font-display text-sm md:text-base transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Volver al Índice</span>
          <span className="sm:hidden">Índice</span>
        </Link>
        <span className="text-white/80 text-xs md:text-sm font-light tracking-wide truncate max-w-[150px] md:max-w-xs text-center">
          {chapter.title}
        </span>
        <div className="w-[80px] sm:w-[100px] flex justify-end"></div>{" "}
        {/* Spacer for alignment */}
      </div>

      {/* Chapter Content */}
      <article className="relative max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Chapter Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-lz-cuart mb-4 tracking-tight drop-shadow-sm">
            Capítulo {chapter.number}
          </h1>
          <h2 className="text-2xl md:text-3xl text-white font-serif font-medium mt-2">
            {chapter.title}
          </h2>
        </header>

        {/* Chapter Image */}
        {chapter.image && (
          <div className="relative w-full aspect-[16/9] mb-12 md:mb-16 rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src={chapter.image}
              alt={`Ilustración del Capítulo ${chapter.number}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        )}

        {/* Reading Info */}
        <div className="flex justify-center items-center gap-6 mb-12 text-sm text-lz-cuart/80 font-mono border-t border-b border-white/10 py-4">
          <span className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />{" "}
            {chapter.wordCount.toLocaleString()} palabras
          </span>
          <span>•</span>
          <span>{chapter.readingTime} min de lectura</span>
        </div>

        {/* Chapter Text */}
        <div className="prose prose-lg md:prose-xl prose-invert max-w-none text-lz-theme-light-text/90">
          {/* We use a specific text color that contrasts well on bg-lz-second */}
          {chapter.content.split("\n\n").map((paragraph) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            return (
              <p
                key={trimmed.slice(0, 20)}
                className="mb-8 text-white/90 leading-relaxed tracking-wide text-justify font-serif text-lg md:text-xl"
              >
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Navigation Buttons Footer */}
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-16 pt-12 border-t border-white/10">
          {prevChapter ? (
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-lz-terc text-lz-terc hover:bg-lz-terc hover:text-white transition-all group"
            >
              <Link
                href={`/lectura/${book.id}/${prevChapter.number}`}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="block text-xs opacity-70">Anterior</span>
                  <span className="font-semibold max-w-[150px] truncate block">
                    {prevChapter.title}
                  </span>
                </div>
              </Link>
            </Button>
          ) : (
            <div className="w-full sm:w-auto"></div>
          )}

          {nextChapter ? (
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-lz-cuart text-lz-cuart hover:bg-lz-cuart hover:text-lz-prime transition-all group"
            >
              <Link
                href={`/lectura/${book.id}/${nextChapter.number}`}
                className="flex items-center gap-2"
              >
                <div className="text-right">
                  <span className="block text-xs opacity-70">Siguiente</span>
                  <span className="font-semibold max-w-[150px] truncate block">
                    {nextChapter.title}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          ) : (
            <div className="w-full sm:w-auto"></div>
          )}
        </nav>
      </article>

      {/* Back to Top Button */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full h-12 w-12 bg-lz-cuart text-lz-prime hover:bg-white hover:text-lz-prime shadow-xl border-2 border-lz-prime"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
