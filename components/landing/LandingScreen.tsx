"use client";

import { useState } from "react";
import { ProphecyScreen } from "./ProphecyScreen";
import { StarAnimation } from "./StarAnimation";

export function LandingScreen() {
  const [showProphecy, setShowProphecy] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Screen 1: Star Animation */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-linear ${
          showProphecy ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <StarAnimation onComplete={() => setShowProphecy(true)} />
      </div>

      {/* Screen 2: Prophecy */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-linear ${
          showProphecy ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ProphecyScreen />
      </div>
    </div>
  );
}
