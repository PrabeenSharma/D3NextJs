"use client";

import { useEffect, useState } from "react";

export default function PageFadeIn({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onLoad = () => setShow(true);

    if (document.readyState === "complete") {
      setShow(true);
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className={`page-fade ${show ? "show" : ""}`}>
      {children}
    </div>
  );
}
