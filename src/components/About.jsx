import {
  Scissors,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image-wrapper">
        <img
          src="/salon-interior.jpg"
          alt="Select Men Beauty Salon interior in Domlur"
          className="about-image"
        />

        <div className="about-image-label">
          <strong>9+</strong>
          <span>SELECT MEN</span>
        </div>
      </div>

      <div className="about-content">
        <p className="eyebrow">ABOUT SELECT MEN</p>

        <h2>
          MORE THAN JUST
          <span>A HAIRCUT.</span>
        </h2>

        <p className="about-main-text">
          Select Men Beauty Salon 9+ brings professional
          men's grooming to Domlur, Bengaluru.
        </p>

        <p className="about-secondary-text">
          From sharp haircuts and beard styling to hair
          spa, D-Tan and premium facial care, our focus is
          simple — helping you look fresh, sharp and
          confident.
        </p>

        <div className="about-features">
          <div className="about-feature">
            <Scissors />

            <div>
              <h3>Professional Grooming</h3>
              <p>
                Hair and beard care for your style.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <Sparkles />

            <div>
              <h3>Complete Care</h3>
              <p>
                Hair, skin and grooming services.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <UserRoundCheck />

            <div>
              <h3>Personal Style</h3>
              <p>
                A grooming experience built around you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;