"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="git-heading">GET IN<br />TOUCH</h2>
      <p className="git-subtitle">
        Reach out for service inquiries, solution guidance, or partnership opportunities.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="float-group">
          <input type="text" name="name" className="float-input" placeholder=" " required />
          <label className="float-label">Name</label>
        </div>

        <div className="float-group">
          <input type="email" name="email" className="float-input" placeholder=" " required />
          <label className="float-label">Email</label>
        </div>

        <div className="float-group">
          <input type="text" name="subject" className="float-input" placeholder=" " />
          <label className="float-label">Subject</label>
        </div>

        <div className="float-group float-group--textarea">
          <textarea name="message" className="float-input" placeholder=" " required></textarea>
          <label className="float-label">Message</label>
        </div>

        <div className="pt-[14px]">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center w-[267px] h-[61px] bg-[#4026B8] hover:bg-[#3420a0] rounded-[20px] border-none cursor-pointer transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="text-white font-normal text-[19px] leading-none tracking-normal text-center w-[155px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </span>
          </button>
        </div>

        {status === "success" && (
          <p className="pt-4 text-green-600 text-sm">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="pt-4 text-red-600 text-sm">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
