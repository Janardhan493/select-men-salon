import { MessageCircle } from "lucide-react";

import { salonInfo } from "../data/salonData";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Select Men Beauty Salon 9+, I would like to book an appointment."
  );

  return (
    <a
      href={`https://wa.me/${salonInfo.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Book appointment on WhatsApp"
    >
      <MessageCircle size={25} />
      <span>Book Now</span>
    </a>
  );
}

export default WhatsAppButton;