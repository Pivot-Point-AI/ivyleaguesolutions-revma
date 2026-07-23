import Image from "next/image";
import SecurityCardsCarousel from "./SecurityCardsCarousel";

export default function SecuritySection() {
  return (
    <section className="ent-security relative w-full overflow-hidden">


        <Image src="/assets/enterprisePage/securityBackground.svg"
             alt=""
             aria-hidden="true"
             fill sizes="100vw"
             className="ent-security__bg"/>


        <div className="ent-security__gradient"></div>


        <div className="ent-security__content">
            <h2 className="ent-security__heading">
                Application Security Measures
            </h2>
            <p className="ent-security__desc">
                Application security is critical. Our measures help protect
                data, prevent attacks, ensure compliance, and reduce costs.
            </p>
        </div>


        <div className="ent-security__carousel">
            <SecurityCardsCarousel />
        </div>

    </section>
  );
}
