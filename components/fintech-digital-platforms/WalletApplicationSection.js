import Image from "next/image";

export default function WalletApplicationSection() {
  return (
    <section className="content-section-with-bottom bg-[#f8f8f8] px-[140px] pt-[215px] pb-[215px]">
      <div className="two-col-layout wallet-two-col flex items-center justify-between gap-[60px]">
        <div className="shrink-0 wallet-text-col">
          <h2 className="text-display text-[#242424] font-normal m-0 max-w-[565px]">Wallet Application</h2>
          <p className="body-25 text-[#979797] font-light m-0 mt-10 max-w-[650px]">
            Our Wallet solutions are designed to accommodate the growing demand for digital payments,
            making it easier for your customers to send money, pay bills, and manage their finances
            online. With our wallet application, users can perform transactions instantly and securely,
            from peer-to-peer payments to e-commerce purchases. The application is integrated with
            advanced security protocols, ensuring that all transactions are protected.
          </p>
        </div>

        <div className="wallet-card">
          <div className="wallet-glow-tl"></div>
          <div className="wallet-glow-br"></div>
          <Image src="/assets/fintechPage/walletMobile.svg" alt="Wallet Mobile" width={782} height={667} className="wallet-img" />
        </div>
      </div>
    </section>
  );
}
