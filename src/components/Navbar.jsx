import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { salonInfo } from "../data/salonData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand">
        SELECT<span>MEN</span>
        <small>9+</small>
      </a>

      <nav className="desktop-nav">
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>

      <a
        href={`tel:${salonInfo.phone}`}
        className="nav-book-button"
      >
        <Phone size={17} />
        Call Now
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href={`tel:${salonInfo.phone}`}
          className="mobile-call"
        >
          Call {salonInfo.phone}
        </a>
      </div>
    </header>
  );
}

export default Navbar;