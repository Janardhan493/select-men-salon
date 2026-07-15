import { ArrowRight } from "lucide-react";

import {
  salonInfo,
  services,
} from "../data/salonData";

function Services() {
  const bookService = (serviceName) => {
    const message = encodeURIComponent(
      `Hi Select Men Beauty Salon 9+, I would like to enquire about ${serviceName}.`
    );

    window.open(
      `https://wa.me/${salonInfo.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">OUR SERVICES</p>

        <h2>
          GROOMING FOR THE
          <span>MODERN MAN.</span>
        </h2>

        <p className="section-description">
          From everyday grooming to premium salon care,
          choose the service that fits your style.
        </p>
      </div>

      <div className="services-grid">
        {services.map((category, categoryIndex) => (
          <article
            className="service-category"
            key={category.category}
          >
            <div className="category-number">
              {String(categoryIndex + 1).padStart(2, "0")}
            </div>

            <h3>{category.category}</h3>

            <div className="service-list">
              {category.services.map((service) => (
                <button
                  className="service-row"
                  key={service.name}
                  onClick={() =>
                    bookService(service.name)
                  }
                >
                  <span>{service.name}</span>
                  <strong>{service.price}</strong>
                </button>
              ))}
            </div>

            <button
              className="category-book"
              onClick={() =>
                bookService(category.category)
              }
            >
              Enquire Now
              <ArrowRight size={17} />
            </button>
          </article>
        ))}
      </div>

      <p className="price-note">
        * Prices and service availability are subject to
        confirmation at the salon.
      </p>
    </section>
  );
}

export default Services;