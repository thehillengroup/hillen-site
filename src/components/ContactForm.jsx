import React from 'react';

const ContactForm = () => (
  <form
    action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"
    method="POST"
    className="bg-white shadow-md rounded-lg px-6 py-8 space-y-6"
  >
    <div>
      <label className="block mb-1 text-dark font-semibold">Your Name</label>
      <input
        type="text"
        name="name"
        required
        className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
    <div>
      <label className="block mb-1 text-dark font-semibold">Your Email</label>
      <input
        type="email"
        name="_replyto"
        required
        className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
    <div>
      <label className="block mb-1 text-dark font-semibold">Message</label>
      <textarea
        name="message"
        rows="5"
        required
        className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-primary hover:bg-accent text-white font-semibold px-6 py-3 rounded transition"
    >
      Send Message
    </button>
  </form>
);

export default ContactForm;
