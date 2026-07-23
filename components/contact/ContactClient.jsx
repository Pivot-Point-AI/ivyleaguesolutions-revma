"use client";

import { useEffect } from "react";
import { usePageStore } from "../PageStore";
import ContactHero from "./ContactHero";
import ContactBanner from "./ContactBanner";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactClient() {
  const { setHeroDark } = usePageStore();
  useEffect(() => { setHeroDark(false); }, [setHeroDark]);

  return (
    <div className="bg-[#F8F8F8]">
      {/* HERO */}
      <ContactHero />

      {/* PURPLE BANNER */}
      <ContactBanner />

      {/* MAIN CONTACT SECTION */}
      <section className="bg-[#F8F8F8] pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[140px] lg:pt-[200px] lg:pb-[300px]">
        <div className="max-w-[90%] mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
            {/* LEFT: Map + Info */}
            <ContactInfo />

            {/* RIGHT: Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
