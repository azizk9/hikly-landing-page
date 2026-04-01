import {
  FaHome,
  FaSuitcaseRolling,
  FaInfoCircle,
  FaImages,
  FaStar,
  FaBlog,
} from "react-icons/fa";

const navbarData = {
  logo: "/logo.png",
  logoAlt: "Hikely Logo",
  defaultLanguage: "EN",

  languages: {
    EN: {
      languageLabel: "English",
      dir: "ltr",
      book: "Book a Trip",
      items: [
        { icon: FaHome, label: "Home", href: "#" },
        { icon: FaSuitcaseRolling, label: "Trips", href: "#trips" },
        { icon: FaInfoCircle, label: "About", href: "#about" },
        { icon: FaImages, label: "Gallery", href: "#gallery" },
        { icon: FaStar, label: "Testimonials", href: "#testimonials" },
        { icon: FaBlog, label: "Blogs", href: "#blog" },
      ],
    },

    AR: {
      languageLabel: "العربية",
      dir: "rtl",
      book: "احجز رحلة",
      items: [
        { icon: FaHome, label: "الرئيسية", href: "#" },
        { icon: FaSuitcaseRolling, label: "الرحلات", href: "#trips" },
        { icon: FaInfoCircle, label: "من نحن", href: "#about" },
        { icon: FaImages, label: "المعرض", href: "#gallery" },
        { icon: FaStar, label: "التقييمات", href: "#testimonials" },
        { icon: FaBlog, label: "المدونة", href: "#blog" },
      ],
    },
  },
};

export default navbarData;