import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import Workshops from "./pages/Workshops";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meetings" element={<Meetings />} />
          <Routes path="/workshops" element={<Workshops />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
