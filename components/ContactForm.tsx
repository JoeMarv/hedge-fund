"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telegram: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://dummy-api.eagleairesearch.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({ firstName: "", lastName: "", email: "", telegram: "" });
      } else {
        setMessage(`❌ Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-8 my-8 bg-transparent w-full max-w-md md:my-0">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="px-6 py-4 bg-white/30 rounded-3xl text-primary/50"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="px-6 py-4 bg-white/30 rounded-3xl text-primary/50"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="px-6 py-4 bg-white/30 rounded-3xl text-primary/50"
      />
      <input
        type="text"
        name="telegram"
        placeholder="Telegram Username"
        value={formData.telegram}
        onChange={handleChange}
        required
        className="px-6 py-4 bg-white/30 rounded-3xl text-primary/50"
      />
      
      <button
        type="submit"
        disabled={loading}
        className="bg-angled-gradient text-white px-6 py-3 rounded-3xl md:w-3/5 md:self-end md:font-normal border border-transparent hover:border-primary hover:bg-none hover:text-primary focus:border-secondary focus:text-secondary transition-all"
      >
        {loading ? "Registering..." : "Register your interest now"}
      </button>

      {message && <p className="text-white/70 text-sm text-center mt-2">{message}</p>}
    </form>
  );
}
