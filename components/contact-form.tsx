"use client";

import { type FormEvent, useRef, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      setStatus("error");
      setMessage("The form connection is being finalised. Please use the direct email link.");
      window.setTimeout(() => statusRef.current?.focus(), 0);
      return;
    }

    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).catch(() => null);

    if (response?.ok) {
      form.reset();
      setStatus("success");
      setMessage("Thank you. Your message has been sent, and I will respond as soon as I can.");
    } else {
      setStatus("error");
      setMessage("The message could not be sent. Please try again or use the direct email link.");
    }
    window.setTimeout(() => statusRef.current?.focus(), 0);
  }

  const buttonLabel = status === "loading" ? "Sending" : "Send message";

  return (
    <form className="contact-form" onSubmit={onSubmit} data-status={status}>
      <div className="form-row">
        <label><span>Name</span><input name="name" autoComplete="name" required /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label><span>Message</span><textarea name="message" rows={7} required /></label>
      <label className="honeypot" aria-hidden="true"><span>Leave this field empty</span><input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-actions">
        <button type="submit" disabled={status === "loading"} aria-busy={status === "loading"}>
          <span className="button-label"><span>{buttonLabel}</span><span aria-hidden="true">{buttonLabel}</span></span>
          <span className="button-arrow" aria-hidden="true">↗</span>
        </button>
        <p>Used only to respond to your enquiry.</p>
      </div>
      {message ? <div ref={statusRef} className={`form-status form-status--${status}`} role={status === "error" ? "alert" : "status"} tabIndex={-1}>{message}</div> : null}
    </form>
  );
}
