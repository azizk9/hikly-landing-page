import NavBar from "./components/navbar/NavBar"; // N و B كابيتال
import Hero from "./components/hero/hero"; 
import TripsSection from "./components/TripsSection/TripsSection"; // T و S كابيتال
import AboutSection from "./components/AboutSection/AboutSection"; // A و S كابيتال
import GallerySection from "./components/GallerySection/GallerySection"; // G و S كابيتال
import BlogSection from "./components/blog/BlogSection"; // B و S كابيتال
import Footer from "./components/footer/footer"; // f سمول (تأكد من اسم الملف في مجلد footer)

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