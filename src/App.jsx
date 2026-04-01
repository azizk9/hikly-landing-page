import NavBar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import TripsSection from "./components/TripsSection/TripsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import GallerySection from "./components/GallerySection/GallerySection";
import BlogSection from "./components/blog/BlogSection";
import Footer from "./components/footer/Footer";

import footerData from "./data/footerData";
import galleryData from "./data/galleryData";
import aboutData from "./data/aboutData";
import blogData from "./data/blogData";
import tripsData from "./data/tripsData";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection data={aboutData} />
  <TripsSection data={tripsData} />
      <GallerySection data={galleryData} />
      <BlogSection data={blogData} />
      <Footer data={footerData} />
    </>
  );
}

export default App;