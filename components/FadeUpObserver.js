"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function FadeUpObserverInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".fade-up");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, searchParams]);

  return null;
}

export default function FadeUpObserver() {
  return (
    <Suspense fallback={null}>
      <FadeUpObserverInner />
    </Suspense>
  );
}
