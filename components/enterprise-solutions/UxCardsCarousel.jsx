"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { baseUxData } from "./data";

export default function UxCardsCarousel() {
  const trackRef = useRef(null);
  // Duplicate set for seamless looping, first card active
  const [cards, setCards] = useState(() =>
    [...baseUxData, ...baseUxData].map((c, i) => ({ ...c, uid: i, active: i === 0 }))
  );
  const busyRef = useRef(false);
  const [animated, setAnimated] = useState(false);
  const STEP = 501 + 28;

  useEffect(() => {
    const interval = setInterval(() => {
      if (busyRef.current) return;
      busyRef.current = true;
      setAnimated(true);

      const track = trackRef.current;
      if (!track) { busyRef.current = false; return; }

      const handleEnd = () => {
        track.removeEventListener("transitionend", handleEnd);
        setCards((prev) => {
          const next = [...prev];
          const first = next.shift();
          first.active = false;
          next.push(first);
          next[0].active = true;
          return [...next];
        });
        setAnimated(false);
        busyRef.current = false;
      };
      track.addEventListener("transitionend", handleEnd, { once: true });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={trackRef}
      className="flex gap-[28px] pl-[20px] sm:pl-[40px] lg:pl-[140px] will-change-transform"
      style={{
        width: "max-content",
        transform: animated ? `translateX(-${STEP}px)` : "translateX(0)",
        transition: animated ? "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
      }}
    >
      {cards.map((item) => (
        <div className={`ux-card ${item.active ? "ux-active" : "ux-inactive"}`} key={item.uid}>
          <Image className="ux-bg-img" src={item.img} alt={item.title} fill sizes="501px" />
          <div className="ux-overlay"></div>
          <div className="ux-content">
            <div>
              <h3 className="ux-title">{item.title}</h3>
              <p className="ux-desc">{item.desc}</p>
            </div>
            <div>
              <p className="ux-num">{item.num}</p>
              <div className="ux-underline"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
