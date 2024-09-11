"use client";
import Link from "next/link";

import ContactCal from "components/contactcal";
export default function Contact() {
  return (
    <section>
      <div className="mx-auto p-4">
        <h2 className="text-primary py-2 text-center uppercase">Contact</h2>
        <div className="max-w-lg mx-auto">
          <div className="gap-4 py-2">
            Get in touch & setup a meeting
            <ContactCal />
          </div>
        </div>
      </div>
    </section>
  );
}
