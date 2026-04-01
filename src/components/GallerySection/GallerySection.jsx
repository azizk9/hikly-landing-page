import "./GallerySection.css";
import GalleryCard from "./GalleryCard";

function GallerySection({ data }) {
  if (!data) return null;

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="section-header">
          <span className="section-kicker">{data.kicker}</span>
          <h2 className="section-title">{data.title}</h2>
          <p className="section-description">{data.description}</p>
        </div>

        <div className="gallery-filters">
          {data.filters?.map((filter, index) => (
            <button
              key={index}
              className={index === 0 ? "active" : ""}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {data.items?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        <div className="gallery-footer">
          <button className="btn-primary" type="button">
            {data.buttonText || "View Full Gallery →"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;