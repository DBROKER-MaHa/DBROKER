
import Landing from "../components/Landing";
import { useState, useEffect } from "react";
import { Form, Card } from 'react-bootstrap'; 
import { Link } from "react-router-dom";
import { newProject } from "../data/new";
import AboutUs from "../components/AboutUs";
import BestDesign from "../components/BestDesign";
import { FaArrowRight } from "react-icons/fa";


function Home() {
  const extractedData = newProject.slice(0, 6);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const shift = Math.min(0, scrollPosition - 100); 
  return (
    <>
      <Landing />
      <section className = "sec-newProjects">
            <div className="container d-flex justify-content-between">
            <div className = "w-50 scroll-image" style={{ transform: `translateX(${shift}px)` }}>
                <img src="https://res.cloudinary.com/dvfszvcxa/image/upload/v1708770877/yellow-foot-residential-building-oa-lab_6_zn5iwo.jpg" alt="" className="m-image"/>
              </div>
              <div className = "w-50" >
                <h2 className="fs-1 m-title">
                  Our Mission
                </h2>
                <p className="justify">At <span className="bold">DBROKER</span> Real Estate Brokerage, our ethos is to be smart and reliable in all that we do. Our mission is to save our clients time, while satisfying their needs and exceeding their expectations. As a trusted real estate broker, we are dedicated to meeting the unique needs of each client and providing exceptional service in the ever-evolving real estate industry."
Having over 30 years of experience in the financial and real estate sector and with an unwavering dedication to integrity, transparency, and professionalism, we aim to create a positive impact on their lives and the communities we serve. 
Our team of passionate and driven professionals is committed to delivering exceptional results, building long-lasting relationships, and leaving a lasting legacy of excellence.
We strive investors in achieving their goals of addressing Return on Investment (ROI) and Capital Appreciation in the real estate industry.
Together, we envision a future where <span className="bold">DBROKER</span>, Real Estate Brokerage LLC is synonymous with trust, innovation, and success. We are driven by our collective passion to transform lives, one property at a time, and we are honored to be a part of our clients' journey towards a brighter future.
</p>
              </div>
            </div>
            <div className="container  sec-newProjects">
              <h2 className="text-center">Our Vision</h2>
             <div className="d-flex justify-content-center">
             <div class="card-space">
    <div class="card-1">
      <div class="face front">
        <h3>Pioneering Excellence</h3>
      </div>
      <div class="face back">
        <p>To be the leading real estate brokerage firm in the industry, driven by our unwavering passion for excellence and innovation.
</p>
      </div>
    </div>
  </div>
             <div class="card-space">
    <div class="card-1">
      <div class="face front">
        <h3>Elevating Real Estate</h3>
      </div>
      <div class="face back">
        <p>To be recognized as the premier real estate brokerage firm, setting the highest standards of professionalism and integrity in the industry. We aim to provide exceptional service and expertise, ensuring the satisfaction of our clients and establishing long-term relationships built on trust.
</p>
      </div>
    </div>
  </div>
             <div class="card-space">
    <div class="card-1">
      <div class="face front">
        <h3>Your Dream Property Journey Starts Here</h3>
      </div>
      <div class="face back">
        <p>To be the go-to real estate brokerage for clients seeking a stress-free and enjoyable experience in buying or selling their dream properties. We aim to create a casual and friendly environment where our clients feel comfortable and confident in their real estate decisions.
</p>
      </div>
    </div>
  </div>
             </div>
            </div>
      </section>
      <section className="py-7 sec-newProjects">
        <div className=" w-50 container text-center d-flex flex-column align-items-center"
        >
          <h2 className="container">Explore Our  Projects</h2>
          <p className="fs-5 text-center" >
            Take a deep dive and browse homes for sale, for rent, resident reviews and local insights to find what is right
            for you.
          </p>
        </div>
        <div className="cards container mt-10">
          {extractedData.map((item) => (
            <Card className="card-item" key={item.id}>
              <div className="position-relative card-container">
                <Link to={`/newProject/${item.id}`}>
                  <Card.Img variant="top" src={item.src} className="card-img project-img w-100  home-newImage" />
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
