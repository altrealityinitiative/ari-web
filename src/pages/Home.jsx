
import { useEffect } from "react";
import Hero from "../components/Hero";
import AboutXR from "../components/AboutXR";
import Gallery from "../components/Gallery";
import Mission from "../components/Mission";
// import Mission from "../components/Mission";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

// import Newsletter from "../components/Newsletter";

function Home() {
  useEffect(() => {
    document.title = "Alternate Reality Initiative | UofM";
  }, []);

  return (
    <PageTransition>
    <div className="home">
      <Hero />
      <AboutXR />
      <Gallery />
      <Mission />
      <JoinUs />
    </div>
    </PageTransition>
  );
}

export default Home;
