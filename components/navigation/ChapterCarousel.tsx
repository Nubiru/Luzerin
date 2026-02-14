"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Chapter } from "@/lib/types/content";

interface ChapterCarouselProps {
  chapters: Chapter[];
  bookId: string;
}

export function ChapterCarousel({ chapters, bookId }: ChapterCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % chapters.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  const activeChapter = chapters[activeIndex];
  const colors = ["#c0a288", "#8485d6", "#c8c9a0", "#a0b5c2"];
  const colorIndex = activeIndex % colors.length;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[50px]">
      {/* Left Side - Chapter Info */}
      <div
        className="absolute top-0 left-0 w-[35%] h-full flex flex-col items-center justify-evenly bg-[#161616] transition-transform duration-500 px-6 py-8"
        style={{ color: colors[colorIndex] }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Capítulo <span>{activeChapter.number}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-center max-w-[200px] px-4">
          {activeChapter.title}
        </h2>
        <Button
          asChild
          className="bg-lz-btn-teal text-lz-btn-darkest hover:bg-lz-btn-darkest hover:text-lz-btn-light border-4 hover:border-lz-btn-teal rounded-full px-6 py-6 text-base font-bold transition-all duration-1000 group"
        >
          <Link href={`/lectura/${bookId}/${activeChapter.number}`}>
            Leer{" "}
            <span className="inline-block ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Capítulo {activeChapter.number}
            </span>
          </Link>
        </Button>
      </div>

      {/* Right Side - Chapter Image */}
      <div className="absolute top-0 left-[35%] w-[65%] h-full transition-transform duration-500">
        <div className="relative w-full h-full">
          <Image
            src={activeChapter.image || "/images/chapters/0.jpeg"}
            alt={`Capítulo ${activeChapter.number}`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-[35%] -translate-y-1/2 z-[100]">
        <Button
          onClick={goToPrev}
          variant="ghost"
          size="icon"
          className="absolute -translate-x-full rounded-l-full rounded-r-none bg-white/50 hover:bg-white/75 text-black"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
        <Button
          onClick={goToNext}
          variant="ghost"
          size="icon"
          className="absolute translate-y-full rounded-r-full rounded-l-none bg-white/50 hover:bg-white/75 text-black"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
