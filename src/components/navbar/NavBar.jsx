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
import "./NavBar.css";

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
    <header className={`topbar ${menuOpen ? "nav-open" : ""}`} dir={current.dir}>
      <div className="topbar-container">
        {/* --- اللوغو (يسار) --- */}
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Hikely Logo" className="logo-img" />
          </a>
        </div>

        {/* --- القائمة الرئيسية (تتوسط في الشاشات الكبيرة) --- */}
        <nav className={`top-nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            {current.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} onClick={() => setMenuOpen(false)} style={{ '--i': index }}>
                  <a href="#">
                    <Icon className="nav-icon" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* تظهر فقط داخل القائمة الجانبية في الموبايل */}
          <div className="mobile-actions mobile-only">
            <button className="book-trip-btn pulse" type="button">
              <span>{current.book}</span>
              <FaWhatsapp />
            </button>
          </div>
        </nav>

        {/* --- الأزرار الجانبية (يمين) --- */}
        <div className="topbar-actions">
        <div className="lang-wrapper">
  <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
    <FaGlobe />
    <span className="lang-text">{language}</span>
    <FaChevronDown className={`lang-arrow ${langOpen ? "rotate" : ""}`} />
  </button>
  
  {langOpen && (
    <div className="lang-dropdown">
      <button onClick={() => changeLanguage("EN")}>
        English {language === "EN" && "✓"}
      </button>
      <button onClick={() => changeLanguage("AR")}>
        العربية {language === "AR" && "✓"}
      </button>
    </div>
  )}
</div>

          {/* زر الحجز للديسك توب فقط */}
          <button className="book-trip-btn desktop-only pulse" type="button">
            <span>{current.book}</span>
            <FaWhatsapp />
          </button>

          {/* زر الهامبرغر - يختفي إجبارياً في الشاشات الكبيرة بفضل كلاس mobile-only */}
          <button className="menu-toggle mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;