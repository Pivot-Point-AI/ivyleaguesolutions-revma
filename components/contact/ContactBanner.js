export default function ContactBanner() {
  return (
    <section className="contact-banner-section w-full bg-[#4026B8] flex items-center justify-between px-[140px] py-[35px] mt-[40px] sm:mt-[60px] lg:mt-[90px]">
      <div className="contact-banner-heading-w shrink-0">
        <h2 className="contact-banner-heading text-white font-normal m-0">Contact Us</h2>
      </div>
      <div className="contact-banner-body-w shrink-0">
        <p className="contact-banner-body text-white font-light m-0">
          Have questions about your project? Need help with strategy or
          implementation? Our team is ready to assist you.
        </p>
      </div>
    </section>
  );
}
