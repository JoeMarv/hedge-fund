"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-6 md:p-4 transition-all duration-300
        ${scrolled ? "bg-white/5 backdrop-blur-md shadow-lg" : "md:bg-[#0A1F44] bg-transparent"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between md:justify-center md:w-3/5">
        {/* Mobile Logo (Left-Aligned) */}
        <img src="/images/logo.png" alt="Logo" className="w-8 h-auto md:hidden" />

        {/* Desktop Logo (Centered) */}
        <img src="/images/full-logo.png" alt="Logo" className="w-44 mr-8 h-auto hidden md:block" />

        {/* Desktop Navbar (Centered) */}
        <ul className="hidden md:flex md:items-center md:gap-x-6 text-white">
          <li><a href="/" className="text-white/70 hover:text-primary transition-all">Products</a></li>
          <li><a href="/" className="text-white/70 hover:text-primary transition-all">Partnerships</a></li>
          <li><a href="/" className="text-white/70 hover:text-primary transition-all">Sponsorships</a></li>
          <li><a href="/" className="text-white/70 hover:text-primary transition-all">Education</a></li>
          <li><a href="/" className="text-white/70 hover:text-primary transition-all">Docs</a></li>
          <li><a href="/" className="text-white/70 hover:text-primary transition-all">Team</a></li>
          <li><a href="/" className="hover:text-primary font-semibold transition-all">Trade Dividends</a></li>
          <li>
            <button className="text-white px-8 py-2 rounded-3xl bg-angled-gradient border border-transparent hover:border-primary hover:bg-none hover:text-primary focus:border-secondary focus:text-secondary transition-all">
              Launch App
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button (Right-Aligned) */}
        {!menuOpen && (
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <img src="/images/hamburger.png" alt="Menu" className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 top-0 right-0 w-[90%] h-screen p-6 
            bg-black/90 backdrop-blur-xl shadow-lg text-white
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "translate-x-[100%]"} 
            md:hidden`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X className="w-8 h-8" />
        </button>

        <ul className="flex flex-col justify-center items-center h-full space-y-6">
          <li><a href="/" className="hover:text-primary transition-all">Products</a></li>
          <li><a href="/" className="hover:text-primary transition-all">Partnerships</a></li>
          <li><a href="/" className="hover:text-primary transition-all">Sponsorships</a></li>
          <li><a href="/" className="hover:text-primary transition-all">Education</a></li>
          <li><a href="/" className="hover:text-primary transition-all">Docs</a></li>
          <li><a href="/" className="hover:text-primary transition-all">Team</a></li>
          <li><a href="/" className="hover:text-primary font-semibold transition-all">Trade Dividends</a></li>
          <li>
            <button className="text-white px-8 py-2 mt-4 rounded-3xl bg-angled-gradient border border-transparent hover:border-primary hover:bg-none hover:text-primary focus:border-secondary focus:text-secondary transition-all">
              Launch App
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
