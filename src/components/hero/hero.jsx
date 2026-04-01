import {
  FaWhatsapp,
  FaPlay,
  FaStar,
  FaHiking,
  FaFlag,
  FaMountain,
  FaMedal,
} from "react-icons/fa";
import "./hero.css";
import heroData from "../../data/heroData";

function Hero({ language = "EN" }) {
  const currentData = heroData[language];
  const isArabic = language === "AR";

  const iconMap = {
    hiking: <FaHiking className="stat-icon" />,
    flag: <FaFlag className="stat-icon" />,
    mountain: <FaMountain className="stat-icon" />,
    medal: <FaMedal className="stat-icon" />,
  };

  return (
    <>
      <section
        className="hero"
        dir={isArabic ? "rtl" : "ltr"}
        style={{
          backgroundImage: `url(${heroData.backgroundImage})`,
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            {currentData.title}
            <span>{currentData.highlight}</span>
          </h1>

          <p>{currentData.description}</p>

          <div className="badges">
            {currentData.badges.map((badge, index) => (
              <div className="badge" key={index}>
                {badge}
              </div>
            ))}
          </div>

          <div className="buttons">
            <button className="whatsapp" type="button">
              <FaWhatsapp />
              {currentData.primaryButtonText}
            </button>

            <button className="video" type="button">
              <FaPlay />
              {currentData.secondaryButtonText}
            </button>
          </div>

          <div className="reviews">
            <span className="trusted-text">{currentData.reviewsText}</span>

            <div className="avatars">
              {heroData.avatars.map((avatar, index) => (
                <img src={avatar} alt={`avatar-${index}`} key={index} />
              ))}
            </div>

            <div className="stars">
              {Array.from({ length: heroData.stars }).map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <span className="reviews-score">{currentData.reviewsScore}</span>
          </div>
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,70 C120,95 250,20 380,55 C520,92 620,28 760,58 C920,94 1030,20 1190,52 C1300,73 1375,55 1440,65 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      <section className="stats-section" dir={isArabic ? "rtl" : "ltr"}>
        <div className="stats-container">
          {currentData.stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              {iconMap[stat.icon]}
              <div className="stat-number">
                {stat.number}
                {stat.star && <span className="blue-star">★</span>}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;