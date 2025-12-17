"use client";

import { useEffect, useState } from "react";

export default function GreenhouseIframe() {
  const [iframeHeight, setIframeHeight] = useState(2000);

  // Optional: Auto-resize iframe based on its messages
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin.includes("greenhouse.io") && event.data?.height) {
        setIframeHeight(event.data.height);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div id="grnhse_app">
      <iframe
        id="grnhse_iframe"
        title="Greenhouse Job Board"
        src="https://job-boards.greenhouse.io/embed/job_board?for=d3"
        width="100%"
        height={iframeHeight}
        frameBorder="0"
        scrolling="no"
        allow="geolocation"
        style={{ minHeight: "1200px", width: "100%" }}
      />
    </div>
  );
}
