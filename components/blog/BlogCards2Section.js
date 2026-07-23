import Image from "next/image";
import { blogCards2 } from "./data";

export default function BlogCards2Section() {
  return (
    <section className="blg-cards2-section">
      <div className="blg-cards2-wrap">
        {blogCards2.map((card) => (
          <div className="blg-card2" key={card.title}>
            <Image src={card.img} alt={card.alt} width={800} height={427} className="blg-card2-img" />
            <div className="blg-card2-meta">
              <span className="blg-card2-label">{card.label}</span>
              <span className="blg-card2-date">{card.date}</span>
            </div>
            <h2 className="blg-card2-title">{card.title}</h2>
            <p className="blg-card2-desc">
              {card.desc}
            </p>
            <a href="#" className="blg-card2-read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
