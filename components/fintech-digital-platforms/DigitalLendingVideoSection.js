export default function DigitalLendingVideoSection() {
  return (
    <section className="w-full h-screen bg-black relative overflow-hidden">
      <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/assets/videos/video_one.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
