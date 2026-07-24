import { Fragment } from "react";
import Image from "next/image";
import { topStories } from "./data";

export default function FeaturedAndStories() {
  return (
    <section className="blg-content-section">
      <div className="blg-content-wrap">
        <div className="blg-left-col">
          <Image src="/assets/blogPage/featuredArticle.webp" alt="Why ERP Implementations Should Put Your Needs First" width={800} height={427} className="blg-feat-img" />
          <div className="blg-feat-meta">
            <span className="blg-feat-label">Featured Article.</span>
            <span className="blg-feat-date">Apr 7, 2026</span>
          </div>
          <h2 className="blg-feat-title">Why ERP Implementations Should Put Your Needs First</h2>
          <p className="blg-feat-desc">
            Most ERP failures happen when systems are forced onto businesses instead of built around them. Here&apos;s how to approach ERP in a way that actually supports your operations, not complicates them.
          </p>
          <a href="#" className="blg-read-more">Read More</a>
        </div>

        <div className="blg-right-col">
          <h3 className="blg-stories-heading">Top Stories</h3>

          {topStories.map((story, i) => (
            <Fragment key={story.number}>
              <div className="blg-story-item">
                <div className="blg-story-badge">{story.number}</div>
                <div className="blg-story-info">
                  <p className="blg-story-title">{story.title}</p>
                  <p className="blg-story-date">{story.date}</p>
                </div>
                <Image src={story.img} alt={story.alt} width={156} height={158} className="blg-story-img" />
              </div>

              {i < topStories.length - 1 && (
                <Image src="/assets/blogPage/storiesLine.webp" alt="" aria-hidden="true" width={755} height={1} className="blg-story-divider-img" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
