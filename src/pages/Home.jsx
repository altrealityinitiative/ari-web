
import Hero from "../components/Hero";
import AboutXR from "../components/AboutXR";
import Gallery from "../components/Gallery";
import Mission from "../components/Mission";
// import Mission from "../components/Mission";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

// import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div className="home">
      <Hero />
      <AboutXR />
      <Gallery />
      <Mission />
      <JoinUs />
    </div>
  );
}

export default Home;
