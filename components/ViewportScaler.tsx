"use client";

import { useEffect } from "react";

const DESIGN_WIDTH = 1920;
const BASE_ZOOM = 0.8;
const DESKTOP_MIN = 1024;

export default function ViewportScaler() {
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (vw >= DESKTOP_MIN) {
        const zoom = (vw / DESIGN_WIDTH) * BASE_ZOOM;
        const heroHeight = Math.round(vh / zoom);
        document.documentElement.style.setProperty("--vp-zoom", zoom.toFixed(4));
        document.documentElement.style.setProperty("--hero-height", heroHeight + "px");
      } else {
        document.documentElement.style.setProperty("--vp-zoom", "1");
        document.documentElement.style.setProperty("--hero-height", "100vh");
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return null;
}
