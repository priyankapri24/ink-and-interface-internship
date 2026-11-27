
"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Selected work", href: "#work" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Brand */}
      <a href="#home" className="brand">
        <span className="brand-symbol">i.</span>
        <span className="brand-name">
          ink<span className="brand-amp">&</span>interface
        </span>
      </a>

      {/* Desktop navigation capsule */}
      <div className="nav-links">
        {navLinks.map((link, index) => (
          <a key={link.label} href={link.href}>
            <span className="nav-number">0{index + 1}</span>
            {link.label}
          </a>
        ))}
      </div>

      {/* Contact */}
      <a href="#contact" className="nav-cta">
        <span>Let&apos;s talk</span>
        <span className="nav-cta-icon">
          <ArrowUpRight size={16} />
        </span>
      </a>

      {/* Mobile toggle */}
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-label">
            NAVIGATION — 2026
          </div>

          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-link-number">0{index + 1}</span>
              <span>{link.label}</span>
              <ArrowUpRight size={20} />
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-contact-link"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <ArrowUpRight size={20} />
          </a>
        </div>
      )}
    </nav>
  );
}
