import NavBar from "./components/navbar/NavBar"; // التأكد من N و B كابيتال
import Hero from "./components/hero/hero";
import TripsSection from "./components/TripsSection/TripsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import GallerySection from "./components/GallerySection/GallerySection";
import BlogSection from "./components/blog/BlogSection";
import Footer from "./components/footer/footer"; // التأكد من f سمول كما في مجلدك

import footerData from "./data/footerData";
import galleryData from "./data/galleryData";
import aboutData from "./data/aboutData";
import blogData from "./data/blogData";
import tripsData from "./data/tripsData";
import heroData from "./data/heroData";
import navbarData from "./data/navbarData";

function App() {
  return (
    <>
      <NavBar data={navbarData} />
      <Hero data={heroData} />
      <AboutSection data={aboutData} />
      <TripsSection data={tripsData} />
      <GallerySection data={galleryData} />
      <BlogSection data={blogData} />
      <Footer data={footerData} />
    </>
  );
}

export default App;