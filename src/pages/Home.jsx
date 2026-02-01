import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutXR from "../components/AboutXR";
import Gallery from "../components/Gallery";

// import Mission from "../components/Mission";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import Meetings from "./Meetings";
// import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <AboutXR />
      <Gallery />
      {/* <Mission />
      <JoinUs />
      <Newsletter /> */}
      <JoinUs />
      <Footer />
    </div>
  );
}

export default Home;
