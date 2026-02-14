"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MapLocation {
  id: string;
  name: string;
  position: { top: string; left: string };
  disabled?: boolean;
}

const locations: MapLocation[] = [
  {
    id: "cumen",
    name: "Cumén",
    position: { top: "43%", left: "36.5%" },
    disabled: true,
  },
  {
    id: "luzerin",
    name: "Luzerin",
    position: { top: "78%", left: "24.5%" },
    disabled: true,
  },
  {
    id: "mnus",
    name: "Mina Usina",
    position: { top: "50%", left: "16.5%" },
    disabled: true,
  },
  {
    id: "cllsns",
    name: "Calle de las Sensaciones",
    position: { top: "72%", left: "27.5%" },
    disabled: false,
  },
];

export function InteractiveMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-3xl overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-[3000ms] z-10">
      <div className="relative w-full h-full">
        <Image
          src="/images/chapters/Mapa1.jpg"
          alt="Mapa de Lúzerin"
          fill
          className="object-cover"
        />

        {locations.map((location) => (
          <Button
            key={location.id}
            disabled={location.disabled}
            onMouseEnter={() => setHoveredLocation(location.id)}
            onMouseLeave={() => setHoveredLocation(null)}
            className={`absolute bg-lz-btn-three text-lz-btn-teal border-4 border-lz-btn-light transition-all duration-1000 ${
              hoveredLocation === location.id
                ? "w-[200px] h-[50px] rounded-3xl bg-lz-btn-darkest text-lz-btn-light border-lz-btn-teal px-5 py-3"
                : "w-5 h-5 rounded-full p-0"
            }`}
            style={{
              top: location.position.top,
              left: location.position.left,
            }}
          >
            <span
              className={`transition-all duration-500 ${
                hoveredLocation === location.id ? "opacity-100" : "opacity-0"
              }`}
            >
              {location.name}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
