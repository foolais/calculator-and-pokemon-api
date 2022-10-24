import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Calculator from "./Pages/Calculator";
import Pokemon from "./Pages/Pokemon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Pokemon" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
