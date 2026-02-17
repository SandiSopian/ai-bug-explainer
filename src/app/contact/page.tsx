"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Message sent successfully 🚀");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-3">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                placeholder="john@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition resize-none"
                placeholder="Write your message here..."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
