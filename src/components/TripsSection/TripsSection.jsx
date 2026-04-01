import "./TripsSection.css";
import TripCard from "./TripCard";

function TripsSection({ data }) {
  if (!data) return null;

  const sliderTrips = [...(data.trips || []), ...(data.trips || [])];

  return (
    <section className="trips-section">
      <div className="trips-container">
        <div className="trips-header">
          <div className="section-header trips-header-content">
            <span className="section-kicker">{data.kicker}</span>
            <h2 className="section-title">{data.title}</h2>
            <p className="section-description">{data.description}</p>
          </div>

          <button className="btn-outline view-all-btn" type="button">
            {data.buttonText} <span>→</span>
          </button>
        </div>

        <div className="slider">
          <div className="slider-track">
            {sliderTrips.map((trip, index) => (
              <TripCard key={`${trip.id}-${index}`} trip={trip} />
            ))}
          </div>
        </div>

        <div className="trips-note">{data.note}</div>
      </div>
    </section>
  );
}

export default TripsSection;