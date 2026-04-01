import { useState } from "react";
import {
  FaHome,
  FaSuitcaseRolling,
  FaInfoCircle,
  FaImages,
  FaStar,
  FaBlog,
  FaGlobe,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import "./navbar.css";

function NavBar() {
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const content = {
    EN: {
      dir: "ltr",
      book: "Book a Trip",
      items: [
        { icon: FaHome, label: "Home" },
        { icon: FaSuitcaseRolling, label: "Trips" },
        { icon: FaInfoCircle, label: "About" },
        { icon: FaImages, label: "Gallery" },
        { icon: FaStar, label: "Testimonials" },
        { icon: FaBlog, label: "Blogs" },
      ],
    },
    AR: {
      dir: "rtl",
      book: "احجز رحلة",
      items: [
        { icon: FaHome, label: "الرئيسية" },
        { icon: FaSuitcaseRolling, label: "الرحلات" },
        { icon: FaInfoCircle, label: "من نحن" },
        { icon: FaImages, label: "المعرض" },
        { icon: FaStar, label: "التقييمات" },
        { icon: FaBlog, label: "المدونة" },
      ],
    },
  };

  const current = content[language];

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLangOpen(false);
    setMenuOpen(false);
    document.documentElement.lang = lang === "AR" ? "ar" : "en";
    document.documentElement.dir = content[lang].dir;
  };

  return (
    <header className="topbar" dir={current.dir}> {/* تم تغيير الكلاس ليتوافق مع الـ CSS */}
      <div className="topbar-container"> {/* تم تغيير الكلاس ليتوافق مع الـ CSS */}
        <div className="logo">
          {/* تم تغليف اللوغو برابط وإضافة الكلاس للصورة */}
          <a href="/">
            <img src="/logo.png" alt="Hikely Logo" className="logo-img" />
          </a>
        </div>

        <nav className={`top-nav ${menuOpen ? "active" : ""}`}> {/* تم تغيير الكلاس */}
          <ul className="nav-links">
            {current.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} onClick={() => setMenuOpen(false)}>
                  <a href="#">
                    <Icon className="nav-icon" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-actions">
            <div className="lang-wrapper">
              <button
                className="lang-btn"
                onClick={() => setLangOpen(!langOpen)}
                type="button"
              >
                <FaGlobe />
                <span>{language}</span>
                <FaChevronDown className={`lang-arrow ${langOpen ? "rotate" : ""}`} /> {/* تم تغيير اسم الكلاس */}
              </button>

              {langOpen && (
                <div className="lang-dropdown">
                  <button onClick={() => changeLanguage("EN")} type="button">
                    English
                  </button>
                  <button onClick={() => changeLanguage("AR")} type="button">
                    العربية
                  </button>
                </div>
              )}
            </div>

            <button className="book-trip-btn" type="button"> {/* تم تغيير الكلاس */}
              <span>{current.book}</span>
              <FaWhatsapp />
            </button>
          </div>
        </nav>

        <div className="topbar-actions"> {/* تم تغيير الكلاس ليتوافق مع الـ CSS */}
          <div className="lang-wrapper desktop-only">
            <button
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
              type="button"
            >
              <FaGlobe />
              <span>{language}</span>
              <FaChevronDown className={`lang-arrow ${langOpen ? "rotate" : ""}`} /> {/* تم تغيير اسم الكلاس */}
            </button>

            {langOpen && (
              <div className="lang-dropdown">
                <button onClick={() => changeLanguage("EN")} type="button">
                  English
                </button>
                <button onClick={() => changeLanguage("AR")} type="button">
                  العربية
                </button>
              </div>
            )}
          </div>

          <button className="book-trip-btn desktop-only" type="button"> {/* تم تغيير الكلاس */}
            <span>{current.book}</span>
            <FaWhatsapp />
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;