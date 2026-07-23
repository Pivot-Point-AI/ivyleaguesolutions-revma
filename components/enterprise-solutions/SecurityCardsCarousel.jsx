"use client";

import { useEffect, useRef, useState } from "react";
import { secData } from "./data";

export default function SecurityCardsCarousel() {
  const trackRef = useRef(null);
  const [cards, setCards] = useState(secData);
  const busyRef = useRef(false);
  const [animated, setAnimated] = useState(false);
  const [step, setStep] = useState(528 + 28);
  const [viewportWidth, setViewportWidth] = useState(null);
  const GAP = 28;

  useEffect(() => {
    function recompute() {
      const firstCard = trackRef.current?.querySelector(".sec-card");
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 528;
      const s = cardWidth + GAP;
      setStep(s);

      // .ent-security__track's padding-left is a fluid clamp() (scales down
      // from 140px below 1920px viewports), so read the actual rendered
      // value instead of assuming a fixed 140 — otherwise this miscalculates
      // at any viewport narrower than 1920px.
      const sidePadding = trackRef.current
        ? parseFloat(getComputedStyle(trackRef.current).paddingLeft) || 140
        : 140;

      // Snap the visible window so it always ends exactly halfway through
      // the trailing card, regardless of viewport width or which
      // responsive card-size breakpoint (.sec-card is 528/420/360/300/270px
      // at different widths) is currently active.
      const available = window.innerWidth - sidePadding;
      const fullCards = Math.max(1, Math.floor((available - cardWidth / 2) / s));
      setViewportWidth(sidePadding + fullCards * s + cardWidth / 2);
    }
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, []);

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
          next.push(next.shift());
          return next;
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
      style={{
        width: viewportWidth ? `${viewportWidth}px` : "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <div
        ref={trackRef}
        className="ent-security__track will-change-transform"
        style={{
          width: "max-content",
          transform: animated ? `translateX(-${step}px)` : "translateX(0)",
          transition: animated ? "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        }}
      >
        {cards.map((item) => (
          <div className="sec-card" key={item.num}>
            <div className="sec-num-circle"><span>{item.num}</span></div>
            <div>
              <h3 className="sec-card-title">{item.title}</h3>
              <p className="sec-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
