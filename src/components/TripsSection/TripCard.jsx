function TripCard({ trip }) {
  const difficultyClass =
    trip.level.toLowerCase() === "easy"
      ? "easy"
      : trip.level.toLowerCase() === "moderate"
      ? "moderate"
      : "hard";

  return (
    <div className={`trip-card ${trip.featured ? "featured-card" : ""}`}>
      <div
        className="trip-image"
        style={{ backgroundImage: `url(${trip.image})` }}
      >
        <div className="trip-badges">
          <span className={`badge difficulty ${difficultyClass}`}>
            {trip.level}
          </span>

          <span className="badge category">{trip.category}</span>
        </div>
      </div>

      <div className="trip-body">
        <h3>{trip.title}</h3>

        <div className="trip-meta">
          <span>📍 {trip.location}</span>
          <span>• {trip.duration}</span>
        </div>

        <div className="trip-footer">
          <span className="trip-date">🗓 {trip.date}</span>

          <span className="trip-price">
            {trip.price}
            <small>/person</small>
          </span>
        </div>

        <button
          className={`details-btn ${trip.featured ? "featured-btn" : ""}`}
          type="button"
        >
          View Details <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default TripCard;