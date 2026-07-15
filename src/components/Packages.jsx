import {
  Check,
  MessageCircle,
} from "lucide-react";

import {
  packages,
  salonInfo,
} from "../data/salonData";

function Packages() {
  const bookPackage = (packageName) => {
    const message = encodeURIComponent(
      `Hi Select Men Beauty Salon 9+, I would like to book the ${packageName} grooming package.`
    );

    window.open(
      `https://wa.me/${salonInfo.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="packages-section" id="packages">
      <div className="packages-intro">
        <p className="eyebrow">GROOMING PACKAGES</p>

        <h2>
          MORE STYLE.
          <span>MORE CARE.</span>
        </h2>

        <p>
          Complete grooming combinations designed for
          a refreshed and confident look.
        </p>
      </div>

      <div className="packages-grid">
        {packages.map((item, index) => (
          <article
            className={`package-card ${
              index === 3 ? "featured-package" : ""
            }`}
            key={`${item.name}-${index}`}
          >
            {index === 3 && (
              <div className="popular-label">
                POPULAR
              </div>
            )}

            <p className="package-index">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3>{item.name}</h3>

            <div className="package-price">
              {item.price}
            </div>

            <div className="package-services">
              {item.services.map((service) => (
                <div key={service}>
                  <Check size={16} />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => bookPackage(item.name)}
              className="package-button"
            >
              <MessageCircle size={18} />
              Book Package
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Packages;