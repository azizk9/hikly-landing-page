import "./AboutSection.css";
import AboutFeature from "./AboutFeature";

function AboutSection({ data }) {
  if (!data) return null;

  return (
    <section className="about">
      <div className="about-container">
        {/* LEFT */}
        <div className="about-content">
          <div className="section-header about-header">
            <span className="section-kicker">{data.kicker}</span>

            <h2 className="section-title">{data.title}</h2>

            <p className="section-description">{data.description}</p>
          </div>

          <div className="about-features">
            {data.features?.map((feature, index) => (
              <AboutFeature key={index} feature={feature} />
            ))}
          </div>

          <div className="about-buttons">
            <button className="btn-primary">
              {data.primaryBtn || "Join an Adventure"}
            </button>

            <button className="btn-outline">
              {data.secondaryBtn || "Learn More About Us"}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-images">
          {data.images?.map((img, index) => (
            <img key={index} src={img} alt="about" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;