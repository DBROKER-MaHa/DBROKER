import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (
  <Router>
    <div className="d-flex flex-column  vh-100">
    <header>
      <NavBar/>
    </header>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/services" element = {<Service/>}/>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
