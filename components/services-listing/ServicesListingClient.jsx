"use client";

import { useEffect } from "react";
import { usePageStore } from "../PageStore";
import ServicesHero from "./ServicesHero";
import SmallServiceBoxes from "./SmallServiceBoxes";
import FullWidthImageSection from "./FullWidthImageSection";
import BigServiceBoxes from "./BigServiceBoxes";
import TogetherReinventedSection from "./TogetherReinventedSection";

export default function ServicesListingClient() {
  const { setHeroDark } = usePageStore();
  useEffect(() => { setHeroDark(false); }, [setHeroDark]);

  return (
    <div className="bg-[#f8f8f8]">
      {/* HERO */}
      <ServicesHero />

      {/* THREE SERVICE BOXES */}
      <SmallServiceBoxes />

      {/* FULL WIDTH IMAGE */}
      <FullWidthImageSection />

      {/* TWO LARGE BOXES */}
      <BigServiceBoxes />

      {/* TOGETHER WE REINVENTED */}
      <TogetherReinventedSection />
    </div>
  );
}
