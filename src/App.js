import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import NewProject from "./pages/NewProject";
import NewProjectDetail from "./pages/NewProjectDetail";
import { newProject } from "../src/data/new";

function App() {
  return (
  <Router>
    <div className="d-flex justify-content-between flex-column vh-100">
    <NavBar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/services" element = {<Service/>}/>
      <Route path="/newProject" element = {<NewProject/>}/>
      <Route path="/newProject/:id" element = {<NewProjectDetail newProject = {newProject }/>}/>
    </Routes>
    <Footer/>
    </div>
  </Router>
  );
}

export default App;
