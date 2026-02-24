import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/meetings" element={<Meetings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
