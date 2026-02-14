"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface StarAnimationProps {
  onComplete: () => void;
}

export function StarAnimation({ onComplete }: StarAnimationProps) {
  const [showStar, setShowStar] = useState(true);
  const [showCorona, setShowCorona] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleStarHover = () => {
    setShowCorona(true);
    setTimeout(() => setShowStar(false), 8000);
  };

  const handleCoronaClick = () => {
    setShowCorona(false);
    setShowSubtitle(true);
    setTimeout(() => setShowButton(true), 5000);
  };

  return (
    <div className="relative w-full h-full bg-lz-prime flex flex-col items-center justify-around">
      {/* Title */}
      <h1
        className={`absolute top-[10%] text-lz-cuart font-display text-6xl md:text-8xl font-bold z-10 transition-opacity duration-[5000ms] ${
          showSubtitle ? "opacity-0" : "opacity-100"
        }`}
      >
        Lúzerin
      </h1>

      {/* Star */}
      {showStar && (
        <div
          className="relative cursor-pointer transition-transform duration-[8000ms] hover:scale-[50]"
          onMouseEnter={handleStarHover}
        >
          <div className="w-[200px] h-[140px] relative">
            {/* CSS Star shape - simplified for now */}
            <div className="absolute inset-0 bg-lz-second clip-star"></div>
          </div>
        </div>
      )}

      {/* Corona */}
      {showCorona && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-[5000ms] ease-in-out hover:scale-50"
          onClick={handleCoronaClick}
        >
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
            <Image
              src="/images/backgrounds/corona.jpg"
              alt="Corona"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Subtitle */}
      {showSubtitle && (
        <h4
          className={`absolute top-[38%] text-lz-cuart text-2xl md:text-4xl text-center tracking-wider uppercase leading-relaxed max-w-[500px] transition-opacity duration-[8000ms] ${
            showSubtitle ? "opacity-100" : "opacity-0"
          }`}
        >
          La otra Historia de la Magia y la Hechicería
        </h4>
      )}

      {/* Button */}
      {showButton && (
        <Button
          onClick={onComplete}
          className={`absolute bottom-[5%] bg-lz-btn-teal text-lz-btn-darkest hover:bg-lz-btn-darkest hover:text-lz-btn-light border-4 hover:border-lz-btn-teal rounded-full px-8 py-6 text-lg font-bold transition-all duration-1000 ${
            showButton ? "opacity-100" : "opacity-0"
          } group`}
        >
          Leer{" "}
          <span className="inline-block ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            la Profecía.
          </span>
        </Button>
      )}
    </div>
  );
}
