"use client";

import { useState } from "react";
import Image from "next/image";
import { cards } from "./data";

export default function CloudServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="cc-section">
      <Image src="/assets/infrastructurePage/cloudBackground.svg" alt="" aria-hidden="true" fill sizes="100vw" className="cc-bg" />

      <div className="cc-inner">
        <p className="cc-label m-0">Most Used Cloud Services</p>
        <h2 className="cc-main-heading mt-0">Industry-Leading Cloud Capabilities</h2>

        <div
          className="cc-cards-row"
          id="cc-cards-row"
          onMouseLeave={() => setActive(0)}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`cc-card ${active === i ? "cc-active" : ""}`}
              data-card={i}
              onMouseEnter={() => setActive(i)}
            >
              <div className="cc-card-content cc-content-collapsed">
                <Image src={`/assets/infrastructurePage/${card.icon}`} alt={`${card.heading} icon`} width={60} height={60} className="cc-card-icon" />
                <h3 className="cc-card-heading">{card.heading}</h3>
                <p className="cc-card-body">{card.body}</p>
              </div>
              <div className="cc-card-content cc-content-expanded" aria-hidden="true">
                <Image src={`/assets/infrastructurePage/${card.icon}`} alt="" width={60} height={60} className="cc-card-icon" />
                <h3 className="cc-card-heading">{card.heading}</h3>
                <p className="cc-card-body">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
