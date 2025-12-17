"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function AOSWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration
      easing: "ease-in-out",
      once: false,        // animation triggers every time you scroll
      mirror: false,      // reverse animation when scrolling up
    });
  }, []);

  return <>{children}</>;
}
