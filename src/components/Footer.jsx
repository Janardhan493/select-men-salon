import { salonInfo } from "../data/salonData";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <a href="#home" className="brand footer-brand">
          SELECT<span>MEN</span>
          <small>9+</small>
        </a>

        <p>
          Premium men's grooming in Domlur, Bengaluru.
        </p>
      </div>

      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#packages">Packages</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-contact">
        <a href={`tel:${salonInfo.phone}`}>
          {salonInfo.phone}
        </a>

        <a href={`tel:${salonInfo.secondaryPhone}`}>
          {salonInfo.secondaryPhone}
        </a>

        <p>Domlur, Bengaluru – 560071</p>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Select Men Beauty Salon 9+. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;