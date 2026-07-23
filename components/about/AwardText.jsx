export default function AwardText({ children, className }) {
  // Splits on <br> and words, wrapping each word in a span.award-word for the pop animation
  const lines = Array.isArray(children) ? children : [children];
  return (
    <p className={className}>
      {lines.map((line, li) => (
        <span key={li}>
          {typeof line === "string"
            ? line.split(/\s+/).filter(Boolean).map((w, wi) => (
                <span className="award-word" key={wi}>{w} </span>
              ))
            : line}
          {li < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}
