"use client"; // This is a client component
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      alert('Email sent successfully.');
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-gray-700">
      <h2 className="text-xl mb-4 text-white">Send Me A Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        ></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
