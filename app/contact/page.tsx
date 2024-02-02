"use client";

import ContactForm from "@/components/contactForm";

const ContactPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col justify-start space-y-5">
      <h2 className="flex justify-center text-2xl py-3">お問合せ</h2>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
