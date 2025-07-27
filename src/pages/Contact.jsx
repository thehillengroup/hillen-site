import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <section className="max-w-3xl mx-auto py-20 px-4">
    <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Us</h2>
    <p className="text-lg text-center mb-10 text-dark">
      Have a project or question? Send us a message and we'll get back to you promptly.
    </p>
    <ContactForm />
  </section>
);

export default Contact;
