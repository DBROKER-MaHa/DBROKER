import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Why_Us from "./pages/Why_Us";
import FAQ from "./pages/FAQ";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";




import Nakheel from "./pages/Nakheel";
// import Meraas from "./pages/Meraas";
import Damac from "./pages/Damac";
// import Sobha from "./pages/Sobha";
// import Omniyat from "./pages/Omniyat";
import Select_Group from "./pages/Select_Group";
import Ellington from "./pages/Ellington";
import Binghatti from "./pages/Binghatti";
import Azizi from "./pages/Azizi";
import Mag from "./pages/Mag";
import Iman from "./pages/Iman";
import Reportage from "./pages/Reportage";
// import Denube from "./pages/Denube";
// import Deyaar from "./pages/Deyaar";


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
      <Route path="/Contact" element = {<Contact/>}/>


      <Route path="/Developers" element = {<Developers/>}/>
      <Route path="/Ellington" element = {<Ellington/>}/>
      <Route path="/Damac" element = {<Damac/>}/>
      <Route path="/Nakheel" element = {<Nakheel/>}/>
      <Route path="/Binghatti" element = {<Binghatti/>}/>
      <Route path="/Mag" element = {<Mag/>}/>
      <Route path="/Select_Group" element = {<Select_Group/>}/>
      <Route path="/Azizi" element = {<Azizi/>}/>
      <Route path="/Iman" element = {<Iman/>}/>
      <Route path="/Reportage" element = {<Reportage/>}/>

      {/* 
      <Route path="/Nakheel" element = {<Nakheel/>}/>
      <Route path="/Meraas" element = {<Meraas/>}/>
      <Route path="/Damac" element = {<Damac/>}/>
      <Route path="/Sobha" element = {<Sobha/>}/>
      <Route path="/Omniyat" element = {<Omniyat/>}/>
      <Route path="/Select_Group" element = {<Select_Group/>}/>
      <Route path="/Ellington" element = {<Ellington/>}/>
      <Route path="/Binghatti" element = {<Binghatti/>}/>
      <Route path="/Azizi" element = {<Azizi/>}/>
      <Route path="/Mag" element = {<Mag/>}/>
      <Route path="/Iman" element = {<Iman/>}/>
      <Route path="/Reportage" element = {<Reportage/>}/>
      <Route path="/Denube" element = {<Denube/>}/>
      <Route path="/Deyaar" element = {<Deyaar/>}/> */}




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
