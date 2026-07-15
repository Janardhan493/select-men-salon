import {
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";

import { salonInfo } from "../data/salonData";

function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hi Select Men Beauty Salon 9+, I would like to book an appointment."
  );

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    salonInfo.mapQuery
  )}`;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <p className="eyebrow">VISIT US</p>

        <h2>
          READY FOR A
          <span>NEW LOOK?</span>
        </h2>

        <p className="contact-description">
          Visit Select Men Beauty Salon 9+ in Domlur or
          contact us to enquire about your next grooming
          appointment.
        </p>

        <div className="contact-details">
          <div className="contact-detail">
            <MapPin />

            <div>
              <span>LOCATION</span>
              <p>{salonInfo.location}</p>
            </div>
          </div>

          <div className="contact-detail">
            <Phone />

            <div>
              <span>CALL US</span>

              <a href={`tel:${salonInfo.phone}`}>
                {salonInfo.phone}
              </a>

              <a
                href={`tel:${salonInfo.secondaryPhone}`}
              >
                {salonInfo.secondaryPhone}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-actions">
          <a
            href={`https://wa.me/${salonInfo.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="dark-button"
          >
            <MessageCircle size={19} />
            Book on WhatsApp
          </a>

          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-outline-button"
          >
            <Navigation size={19} />
            Get Directions
          </a>
        </div>
      </div>

      <div className="contact-visual">
        <img
          src="/salon-front.jpg"
          alt="Select Men Beauty Salon 9+ Domlur"
        />

        <div className="contact-visual-overlay">
          <MapPin />

          <div>
            <strong>SELECT MEN 9+</strong>
            <span>DOMLUR • BENGALURU</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;