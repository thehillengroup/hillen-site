import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="py-20 px-4 bg-bg text-dark">
      <div className="max-w-xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center" data-aos="fade-up">Contact Us</h1>
        <p className="text-gray-600 text-center" data-aos="fade-up" data-aos-delay="100">
          Have questions or need to connect? We’d love to hear from you.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
