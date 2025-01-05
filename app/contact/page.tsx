"use client";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setEmail("");
      setMessage("");

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      // Reset error message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <PageLayout title="Contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-full md:col-span-2 bg-[#333639] rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

          {status === "success" && (
            <div className="mb-4 p-4 bg-green-500/10 border border-green-500 rounded-xl text-green-500">
              Message sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500 rounded-xl text-red-500">
              Failed to send message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-xl bg-[#212224] text-white border border-gray-700"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded-xl bg-[#212224] text-white border border-gray-700"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#FFC148] text-black px-6 py-3 rounded-xl font-medium 
                hover:bg-[#FFD577] transition-colors disabled:opacity-50
                flex items-center justify-center min-w-[140px]"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        {/* Social Links */}
        <Card
          title="LinkedIn"
          subtitle="CONNECT WITH ME"
          href="https://linkedin.com/in/yourusername"
        />
        <Card
          title="GitHub"
          subtitle="SEE MY CODE"
          href="https://github.com/yourusername"
        />
      </div>
    </PageLayout>
  );
}
