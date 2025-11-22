"use client";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      setEmail("");
      setMessage("");
      setHoneypot("");

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <PageLayout title="Contact">
      <div className="grid--2-col">
        <div className="form-container card--span-2-md">
          <h2 className="form-container__title">Send a Message</h2>

          {status === "success" && (
            <div className="status-message status-message--success">
              Message sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="status-message status-message--error">
              {errorMessage || "Failed to send message. Please try again."}
            </div>
          )}

          <form onSubmit={handleSubmit} className="form">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__group">
              <label htmlFor="message" className="form__label">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="form__textarea"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                minLength={10}
                maxLength={2000}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="form__button"
            >
              {status === "loading" ? (
                <span className="form__button-loading">
                  <svg className="spinner" viewBox="0 0 24 24">
                    <circle
                      className="spinner__circle"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="spinner__path"
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
