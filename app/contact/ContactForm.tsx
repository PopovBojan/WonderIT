"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Failed to send the message. Please try again."
        );
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again later."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="grid gap-4">
        <h3 className="text-2xl">Message sent</h3>
        <p className="text-text-secondary">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <button
          type="button"
          className="btn btn-primary py-4 text-lg"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <label className="text-sm font-medium ml-1" htmlFor="contact-name">
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="John Doe"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium ml-1" htmlFor="contact-email">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium ml-1" htmlFor="contact-subject">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="How can we help?"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium ml-1" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="Your message..."
          className="resize-none"
          rows={4}
          required
        />
      </div>

      {status === "error" && (
        <p className="text-m" style={{ color: "var(--coral)" }} role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary py-4 text-lg"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
