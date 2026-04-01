import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer({ data }) {
  if (!data) return null;

  const socialIcons = {
    facebook: <FaFacebookF />,
    instagram: <FaInstagram />,
    whatsapp: <FaWhatsapp />,
  };

  const contactIcons = {
    location: <FaMapMarkerAlt />,
    phone: <FaPhone />,
    email: <FaEnvelope />,
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">{data.brand?.logo}</h2>
          <p>{data.brand?.description}</p>

          <div className="footer-socials">
            {data.brand?.socials?.map((social, index) => (
              <span key={index}>{socialIcons[social]}</span>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h3>{data.quickLinks?.title}</h3>
          <ul>
            {data.quickLinks?.links?.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>{data.adventures?.title}</h3>
          <ul>
            {data.adventures?.links?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>{data.contact?.title}</h3>
          <ul className="contact">
            {data.contact?.items?.map((item, index) => (
              <li key={index}>
                {contactIcons[item.type]} {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>{data.newsletter?.title}</h3>
          <p>{data.newsletter?.description}</p>

          <div className="newsletter">
            <input
              type="email"
              placeholder={data.newsletter?.placeholder}
            />
            <button className="btn-primary" type="button">
              {data.newsletter?.buttonText}
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{data.bottomText}</p>
      </div>
    </footer>
  );
}

export default Footer;