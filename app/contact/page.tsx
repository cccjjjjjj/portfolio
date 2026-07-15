import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeading } from "@/components/page-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Charles Jr Ancheta about full-time and graduate opportunities.",
};

export default function ContactPage() {
  return (
    <div className="standard-page contact-page page-enter">
      <PageHeading
        eyebrow="Contact · Available December 2026"
        title="Tell me what you’re working on."
        introduction="Open to project management, data analytics, fintech, and regulatory technology opportunities."
      />
      <div className="contact-layout">
        <ContactForm />
        <aside className="contact-aside">
          <p className="eyebrow">Direct</p>
          <a href={`mailto:${siteConfig.email}`}>
            Email <span aria-hidden="true">↗</span>
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <p>Singapore · English and Filipino</p>
        </aside>
      </div>
    </div>
  );
}
