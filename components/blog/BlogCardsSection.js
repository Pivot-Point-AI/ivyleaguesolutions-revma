import Image from "next/image";
import { blogCards } from "./data";

export default function BlogCardsSection() {
  return (
    <section className="blg-cards-section">
      <div className="blg-cards-wrap">
        {blogCards.map((card) => (
          <div className="blg-card" key={card.title}>
            <Image src={card.img} alt={card.alt} width={800} height={427} className="blg-card-img" />
            <div className="blg-card-meta">
              <span className="blg-card-label">{card.label}</span>
              <span className="blg-card-date">{card.date}</span>
            </div>
            <h2 className="blg-card-title">{card.title}</h2>
            <p className="blg-card-desc">
              {card.desc}
            </p>
            <a href="#" className="blg-card-read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
