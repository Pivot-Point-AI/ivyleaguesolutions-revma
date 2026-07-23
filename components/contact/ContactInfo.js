export default function ContactInfo() {
  return (
    <div className="flex flex-col">
      <div className="world-map mb-10">
        <img src="/assets/contactPage/Map.svg" alt="World map" className="map-svg" loading="lazy" />
        <div className="pk-pin">
          <div className="bubble">
            <img src="/assets/contactPage/pkLogo.svg" alt="Pakistan Flag" loading="lazy" />
            <span>Pakistan</span>
          </div>
        </div>
        <div className="pk-dot"></div>

        <div className="usa-pin">
          <div className="bubble">
            <img src="/assets/contactPage/usaFlag.svg" alt="USA Flag" loading="lazy" />
            <span>USA</span>
          </div>
        </div>
        <div className="usa-dot"></div>

        <div className="uae-pin">
          <div className="bubble">
            <img src="/assets/contactPage/uaeFlag.svg" alt="UAE Flag" loading="lazy" />
            <span>UAE</span>
          </div>
        </div>
        <div className="uae-dot"></div>
      </div>

      <div className="contact-info-grid grid grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <p className="info-heading">Contact Us</p>
          <a href="tel:+18453002429" className="info-value">+1 845 300 2429</a>
        </div>

        <div>
          <p className="info-heading">Email</p>
          <a href="mailto:contact@ivyleaguesolutions.com" className="info-value">
            contact@ivyleaguesolutions.com
          </a>
        </div>

        <div className="col-span-2">
          <p className="info-heading">Perth Amboy, USA</p>
          <p className="location-value">
            370 Federal Court, Perth Amboy, NJ 08861, USA
          </p>
        </div>

        <div className="col-span-2">
          <p className="info-heading">Dubai, UAE</p>
          <p className="location-value">
            912, 9th Floor, YES Business Tower, Al Barsha Road, Al Barsha 1, Dubai, UAE
          </p>
        </div>

        <div className="col-span-2">
          <p className="info-heading">Islamabad, Pakistan</p>
          <p className="location-value">
            Corporate and Business Square, 1st/2nd Floor, Wazir Arcade, Park Ave,
            Block C, Gulberg Greens, Islamabad, 44000, Pakistan
          </p>
        </div>
      </div>
    </div>
  );
}
