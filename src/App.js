import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Why_Us from "./pages/Why_Us";
import FAQ from "./pages/FAQ";
import Developers from "./pages/Developers";
import Dev from "./pages/Dev";
import User from "./pages/User";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import NewProject from "./pages/NewProject";
import NewProjectDetail from "./pages/NewProjectDetail";
import { newProject } from "../src/data/new";
import {agent} from "../src/data/new"

function App() {
  return (
  <Router>
   
    <div className="d-flex justify-content-between flex-column vh-100">
    <NavBar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/Why_Us" element = {<Why_Us/>}/>
      <Route path="/FAQ" element = {<FAQ/>}/>
      <Route path="/Developers" element = {<Developers/>}/>
      <Route path="/Dev" element = {<Dev/>}/>

      {/* <Route path="/about" element = {<About/>}/> */}
      <Route path="/services" element = {<Service/>}/>
      <Route path="/newProject" element = {<NewProject/>}/>
      <Route path="/newProject/:id" element = {<NewProjectDetail newProject = {newProject }/>}/>
      <Route  path = "/user/:id" element = {<User user = {agent}/>}/>
    </Routes>
    <Footer/>
    </div>
  </Router>
  );
}

export default App;
