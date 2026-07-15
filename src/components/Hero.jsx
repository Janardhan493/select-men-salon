import {
  ArrowDown,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { salonInfo } from "../data/salonData";

function Hero() {
  const message = encodeURIComponent(
    "Hi Select Men Beauty Salon 9+, I would like to book a salon appointment."
  );

  const whatsappUrl = `https://wa.me/${salonInfo.whatsapp}?text=${message}`;

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-location">
          <MapPin size={16} />
          DOMLUR • BENGALURU
        </div>

        <h1>
          OWN YOUR
          <span>LOOK.</span>
        </h1>

        <p className="hero-description">
          Sharp cuts. Clean fades. Premium grooming.
          Step in for a fresh look crafted for you.
        </p>

        <div className="hero-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="gold-button"
          >
            <MessageCircle size={19} />
            Book on WhatsApp
          </a>

          <a href="#services" className="outline-button">
            Explore Services
          </a>
        </div>

        <div className="hero-contact">
          <span>Appointments & Enquiries</span>

          <a href={`tel:${salonInfo.phone}`}>
            {salonInfo.phone}
          </a>
        </div>
      </div>

      <a href="#services" className="scroll-indicator">
        <span>SCROLL</span>
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

export default Hero;