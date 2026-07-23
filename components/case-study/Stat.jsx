function CheckIcon() {
  return (
    <div className="stat-check">
      <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function Stat({ num, label }) {
  return (
    <div className="stat-item">
      <CheckIcon />
      <div>
        <div className="stat-num">{num}</div>
        <div className="stat-lbl">{label}</div>
      </div>
    </div>
  );
}
