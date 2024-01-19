import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Why_Us from "./pages/Why_Us";
import FAQ from "./pages/FAQ";
import Developers from "./pages/Developers";

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
      <Route path="/Why_Us" element = {<Why_Us/>}/>
      <Route path="/FAQ" element = {<FAQ/>}/>
      <Route path="/Developers" element = {<Developers/>}/>

      {/* <Route path="/about" element = {<About/>}/> */}
      <Route path="/services" element = {<Service/>}/>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
