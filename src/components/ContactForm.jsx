// src/components/ContactForm.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-white rounded-lg shadow-md p-8 space-y-6">
      <input type="hidden" name="to_email" value="mike@thehillengroup.net" />
      <div>
        <label htmlFor="from_name" className="block font-semibold mb-1">Name</label>
        <input
          id="from_name"
          type="text"
          name="from_name"
          required
          className="w-full border rounded px-4 py-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="from_email" className="block font-semibold mb-1">Email</label>
        <input
          id="from_email"
          type="email"
          name="from_email"
          required
          className="w-full border rounded px-4 py-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full border rounded px-4 py-2 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary text-white px-6 py-3 rounded hover:bg-accent transition"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-center text-green-600">Thank you! Your message has been sent.</p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-600">Sorry, something went wrong. Try again.</p>
      )}
    </form>
  );
};

export default ContactForm;
