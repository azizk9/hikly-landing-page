function AboutFeature({ feature }) {
  return (
    <div className="feature">
      <span>{feature.icon}</span>
      <div>
        <h4>{feature.title}</h4>
        <p>{feature.text}</p>
      </div>
    </div>
  );
}

export default AboutFeature;