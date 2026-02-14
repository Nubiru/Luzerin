"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MapLocation {
  id: string;
  name: string;
  position: { top: string; left: string };
  chapterNumber: number;
}

const locations: MapLocation[] = [
  {
    id: "cllsns",
    name: "Calle de las Sensaciones",
    position: { top: "72%", left: "27.5%" },
    chapterNumber: 1,
  },
  {
    id: "mnus",
    name: "Mina Usina",
    position: { top: "50%", left: "16.5%" },
    chapterNumber: 5,
  },
  {
    id: "cumen",
    name: "Cumén",
    position: { top: "43%", left: "36.5%" },
    chapterNumber: 10,
  },
  {
    id: "luzerin",
    name: "Luzerin",
    position: { top: "78%", left: "24.5%" },
    chapterNumber: 15,
  },
];

interface InteractiveMapProps {
  unlockedChapters: number[];
  onLocationClick: (chapterNumber: number) => void;
}

export function InteractiveMap({
  unlockedChapters,
  onLocationClick,
}: InteractiveMapProps) {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[10/7] max-w-[1000px] mx-auto rounded-3xl overflow-hidden shadow-2xl transition-opacity duration-[2000ms] z-10">
      <div className="relative w-full h-full bg-[#1a1a1a]">
        <Image
          src="/images/chapters/Mapa1.jpg"
          alt="Mapa de Lúzerin"
          fill
          className="object-cover opacity-90"
        />

        {locations.map((location) => {
          const isUnlocked = unlockedChapters.includes(location.chapterNumber);
          return (
            <Button
              key={location.id}
              onClick={() =>
                isUnlocked && onLocationClick(location.chapterNumber)
              }
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              className={`absolute border-2 transition-all duration-700 ${
                isUnlocked
                  ? "bg-lz-btn-teal text-lz-btn-darkest border-lz-btn-light animate-pulse-light cursor-pointer"
                  : "bg-gray-800/80 text-gray-500 border-gray-700 cursor-not-allowed grayscale"
              } ${
                hoveredLocation === location.id
                  ? "w-[180px] h-[45px] rounded-2xl px-4 py-2 z-20"
                  : "w-4 h-4 rounded-full p-0 z-10"
              }`}
              style={{
                top: location.position.top,
                left: location.position.left,
              }}
            >
              <span
                className={`text-sm font-bold transition-all duration-300 ${
                  hoveredLocation === location.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {location.name}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
