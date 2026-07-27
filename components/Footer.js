import Link from "next/link";
import Image from "next/image";
import "../app/pagestyles/footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer-bg relative overflow-hidden flex flex-col lg:min-h-[120vh]">
      {/* Horizon glow video */}
      <div className="absolute left-0 right-0 pointer-events-none" style={{ top: "52%" }}>
        <video autoPlay loop muted playsInline preload="none" className="footer-video">
          <source src="/assets/videos/footerVideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Middle: heading + sub-copy + CTA */}
      <div className="relative flex-1 flex flex-col justify-start py-20 lg:pt-16 lg:pb-0 max-w-[90%] mx-auto w-full px-5 sm:px-8 lg:px-16">
        <h2 className="fade-up footer-heading text-white">Get Started</h2>

        <div className="fade-up flex flex-col gap-8 mt-8 delay-100">
          <p className="footer-subtitle text-[#979797] max-w-[900px]">
            A trusted global software development company, delivering scalable software and
            digital infrastructure worldwide.
          </p>

          <Link
            href="/contact"
            className="footer-cta inline-flex items-center justify-center w-[197px] h-[57px] bg-white border border-white text-[#242424] font-normal text-base no-underline transition-opacity duration-200 hover:opacity-[0.88]"
          >
            Get Started Now
          </Link>
        </div>
      </div>

      {/* Bottom: policy links + divider + logo + social icons */}
      <div className="relative max-w-[90%] mx-auto w-full px-5 sm:px-8 lg:px-16 pb-20 sm:pb-32 lg:pb-40 flex-shrink-0">
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-6 sm:gap-10 mb-3">
          <Link href="/case-study" className="footer-policy-link text-[#979797] no-underline transition-colors duration-200 hover:text-white">
            Case Studies
          </Link>
          <Link href="/privacy-policy" className="footer-policy-link text-[#979797] no-underline transition-colors duration-200 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="footer-policy-link text-[#979797] no-underline transition-colors duration-200 hover:text-white">
            Term &amp; Conditions
          </Link>
        </div>

        <div className="border-t border-[#8E8E8E] mb-5"></div>

        <div className="flex items-center justify-between gap-4">
          <div className="relative w-[120px] h-[80px] sm:w-[160px] sm:h-[107px] lg:w-[200px] lg:h-[134px] flex-shrink-0">
            <Image src="/assets/landingPage/ivy2-transparent-dark-bg.png" alt="Ivy League Solutions Logo" fill sizes="200px" className="object-contain object-left block" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap justify-end">
            <a href="#" aria-label="X (Twitter)" className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] transition-opacity duration-200 hover:opacity-70">
              <Image src="/assets/footer/xLogo.svg" alt="X" width={53} height={53} className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] lg:w-[53px] lg:h-[53px] object-contain" />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] transition-opacity duration-200 hover:opacity-70">
              <Image src="/assets/footer/LinkdinLogo.svg" alt="LinkedIn" width={53} height={53} className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] lg:w-[53px] lg:h-[53px] object-contain" />
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] transition-opacity duration-200 hover:opacity-70">
              <Image src="/assets/footer/instagramLogo.svg" alt="Instagram" width={53} height={53} className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] lg:w-[53px] lg:h-[53px] object-contain" />
            </a>
            <a href="#" aria-label="Facebook" className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] transition-opacity duration-200 hover:opacity-70">
              <Image src="/assets/footer/facebookLogo.svg" alt="Facebook" width={53} height={53} className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] lg:w-[53px] lg:h-[53px] object-contain" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
