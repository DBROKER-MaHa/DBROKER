
import Landing from "../components/Landing";
import { Form, Card } from 'react-bootstrap'; 
import { Link } from "react-router-dom";
import { newProject } from "../data/new";
import AboutUs from "../components/AboutUs";
import BestDesign from "../components/BestDesign";
import { FaArrowRight } from "react-icons/fa";


function Home() {
  const extractedData = newProject.slice(0, 6);
  return (
    <>
      <Landing />

      <section className="py-7 sec-newProjects">
        <div className=" w-50 container text-center d-flex flex-column align-items-center"
        >
          <h2 className="container">Explore Our New Projects</h2>
          <p className="fs-5 text-center" >
            Take a deep dive and browse homes for sale, original neighborhood
            photos, resident reviews and local insights to find what is right
            for you.
          </p>
        </div>
        <div className="cards container mt-10">
          {extractedData.map((item) => (
            <Card className="card-item" key={item.id}>
              <div className="position-relative card-container">
                <Link to={`/newProject/${item.id}`}>
                  <Card.Img variant="top" src={item.src} className="card-img w-100  home-newImage" />
                </Link>

                <div className="position-absolute top-0 fs-3 p-2 ">
                 {item.name}
                </div>
                <Link to={`/newProject/${item.id}`}>
                <div className="position-absolute bottom-0 fs-4 p-2 m-2 w-30 text-black  card-read">
                Read More <FaArrowRight></FaArrowRight>
                </div>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-7 sec-newProjects">
        <div className="d-flex align-items-center">
          <h2 className="container text-center">Why Use Us</h2>
        </div>
        <AboutUs />
      </section>
      <section className="py-7">
        <div className=" d-flex align-items-center mb-5">
          <h2 className="container text-center">Meet Our Workers</h2>
        </div>
        <BestDesign />
      </section>
      <section className="sec-newProjects  home-contant">
        <div className=" mb-5 container">
          <h2 className="m-3 text-center">Get in Touch</h2>
          <Form > 
            <Form.Group className="mb-3 row"> 
                <Form.Label htmlFor="name" className="col-sm-3">Name</Form.Label> 
                <div className="col-sm-9">
                    <Form.Control type="text" id="name" /> 
                </div>
            </Form.Group> 
            <Form.Group className="mb-3 row"> 
                <Form.Label htmlFor="email" className="col-sm-3">Email</Form.Label> 
                <div className="col-sm-9">
                    <Form.Control type="email" id="email" /> 
                </div>
            </Form.Group> 
            <Form.Group className="mb-3 row"> 
                <Form.Label htmlFor="message" className="col-sm-3">Message</Form.Label> 
                <div className="col-sm-9">
                    <Form.Control as="textarea" id="message" rows="5" /> 
                </div>
            </Form.Group> 
            <button type="submit" className="btn btn-primary">Send Your Message</button> 
        </Form> 
        </div>
        {/* <BestDesign /> */}
      </section>
    </>
  );
}


export default Home;
