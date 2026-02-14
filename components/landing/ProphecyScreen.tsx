"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { prophecyText } from "@/lib/content/prophecy";
import Link from "next/link";

export function ProphecyScreen() {
  const [showButton, setShowButton] = useState(false);
  const [titleVisible, setTitleVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      setTitleVisible(scrollTop < 50);
      setShowButton(scrollTop > 400);
    }
  };

  return (
    <div className="relative w-full h-full bg-lz-prime flex items-center justify-center">
      {/* Title */}
      <h1
        className={`absolute top-[3%] left-1/2 -translate-x-1/2 text-lz-cuart font-display text-5xl font-bold z-10 transition-opacity duration-500 ${titleVisible ? "opacity-70" : "opacity-0"
          }`}
      >
        Profecía
      </h1>

      {/* Prophecy Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative max-w-[1300px] w-[80vw] h-[90vh] rounded-2xl p-12 md:p-24 overflow-y-auto"
        style={{
          backgroundImage: "url('/images/backgrounds/Fondo General Pergamino.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        {prophecyText.paragraphs.map((para, idx) => (
          <div
            key={idx}
            className={`${para.type === "prophecy"
                ? "bg-lz-cuart border-4 border-lz-second text-lz-second font-black cursor-[url('/images/logos/colibriCursor.png'),_auto]"
                : "bg-lz-second border-2 border-lz-terc text-white font-normal"
              } rounded-3xl px-8 py-6 my-8 leading-relaxed tracking-wide ${para.isLast ? "text-center max-w-[200px] mx-auto" : "max-w-[60vw] mx-auto indent-[7%]"
              }`}
          >
            {para.text}
          </div>
        ))}
      </div>

      {/* Button */}
      <Button
        asChild
        className={`absolute bottom-[2.5%] left-1/2 -translate-x-1/2 bg-lz-btn-teal text-lz-btn-three hover:bg-lz-btn-darkest hover:text-lz-btn-light border-4 hover:border-lz-btn-teal rounded-full px-8 py-6 text-lg font-bold transition-all duration-1000 ${showButton ? "opacity-100" : "opacity-0"
          } group`}
      >
        <Link href="/mapa">
          Entrar{" "}
          <span className="inline-block ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            al Mapa.
          </span>
        </Link>
      </Button>
    </div>
  );
}
