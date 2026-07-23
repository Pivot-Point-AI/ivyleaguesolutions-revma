"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [loaderFadeOut, setLoaderFadeOut] = useState(false);
  const [blackState, setBlackState] = useState("idle"); // idle | in | out
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.classList.add("loading");

    function runSequence() {
      setTimeout(() => {
        setLoaderFadeOut(true);
        setBlackState("in");

        setTimeout(() => {
          document.body.classList.remove("loading");
          setBlackState("out");

          setTimeout(() => {
            setRemoved(true);
          }, 500);
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
    <>
      <div
        id="site-loader"
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${
          loaderFadeOut ? "loader-fade-out" : ""
        }`}
      >
        <img
          src="/assets/landingPage/ivyleague.png"
          alt="Loading..."
          className="site-logo-spin w-[140px] sm:w-[180px] lg:w-[220px] h-auto max-w-[60vw] select-none pointer-events-none"
          loading="eager"
        />
      </div>

      <div
        id="site-loader-black"
        className={`fixed inset-0 z-[9998] bg-black ${
          blackState === "in" ? "black-in" : blackState === "out" ? "black-out" : ""
        }`}
      ></div>
    </>
  );
}
