"use client";

import { useEffect } from "react";

export default function CusdisComments() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="cusdis_thread"
      data-host="https://cusdis.com"
      data-app-id="bc960962-9845-45e0-b446-294d2dd13361"
      data-page-id={typeof window !== "undefined" ? window.location.pathname : ""}
      data-page-url={typeof window !== "undefined" ? window.location.href : ""}
      data-page-title={typeof document !== "undefined" ? document.title : ""}
      className="mt-16"
    />
  );
}
