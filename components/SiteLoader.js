"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [loaderFadeOut, setLoaderFadeOut] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.classList.add("loading");

    function runSequence() {
      setTimeout(() => {
        setLoaderFadeOut(true);
        document.body.classList.remove("loading");

        setTimeout(() => {
          setRemoved(true);
        }, 500);
      }, 300);
    }

    if (document.readyState === "complete") {
      runSequence();
    } else {
      window.addEventListener("load", runSequence);
      return () => window.removeEventListener("load", runSequence);
    }
  }, []);

  if (removed) return null;

  return (
    <div
      id="site-loader"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${
        loaderFadeOut ? "loader-fade-out" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="site-logo-wrap relative flex items-center justify-center">
          <span className="site-logo-ring" aria-hidden="true"></span>
          <img
            src="/assets/landingPage/ivy-mark-transparent.png"
            alt="Loading..."
            className="site-logo-pulse relative w-[64px] sm:w-[76px] lg:w-[88px] h-auto max-w-[40vw] select-none pointer-events-none"
            loading="eager"
          />
        </div>
        <span className="site-loader-bar" aria-hidden="true">
          <span className="site-loader-bar-fill"></span>
        </span>
      </div>
    </div>
  );
}
