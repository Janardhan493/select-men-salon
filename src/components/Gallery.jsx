function Gallery() {
  const galleryItems = [
    {
      image: "/salon-front.jpg",
      title: "Visit Select Men",
      text: "Domlur, Bengaluru",
    },
    {
      image: "/salon-interior.jpg",
      title: "Our Salon",
      text: "Professional grooming space",
    },
    {
      image: "/salon-menu.jpg",
      title: "Grooming Services",
      text: "Hair • Beard • Skin Care",
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-heading">
        <p className="eyebrow">THE SALON</p>

        <h2>
          STEP IN.
          <span>STAND OUT.</span>
        </h2>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article
            className="gallery-item"
            key={item.title}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="gallery-coming">
        <span>COMING SOON</span>

        <p>
          Real haircut and beard transformation gallery.
        </p>
      </div>
    </section>
  );
}

export default Gallery;