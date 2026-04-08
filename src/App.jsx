import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RedirectHandler from "./components/RedirectHandler";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
      <div className="App">
        <RedirectHandler />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
