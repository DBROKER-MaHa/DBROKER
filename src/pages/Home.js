import Landing from "../components/Landing";
import { Card } from "react-bootstrap";
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
        <div className=" new-project d-flex flex-column align-items-center"
        >
          <h2 className="container">Explore Our New Projects</h2>
          <p className="fs-5 text-center" >
            Take a deep dive and browse homes for sale, original neighborhood
            photos, resident reviews and local insights to find what is right
            for you.
          </p>
        </div>
        <div className="cards container my-10">
          {extractedData.map((item) => (
            <Card className="card-item" key={item.id}>
              <div className="position-relative card-container">
                <Link to={`/newProject/${item.id}`}>
                  <Card.Img variant="top" src={item.src} className="card-img home-newImage" />
                </Link>

                <div className="position-absolute top-0 fs-3 p-2 ">
                 {item.name}
                </div>
                <Link to={`/newProject/${item.id}`}>
                <div className="position-absolute bottom-0 fs-4 p-2 m-2 card-read">
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
          <h2 className="container">Why Use Us</h2>
        </div>
        <AboutUs />
      </section>
      <section className="py-7">
        <div className=" d-flex align-items-center mb-5">
          <h2 className="container">Meet Our Agents</h2>
        </div>
        <BestDesign />
      </section>
    </>
  );
}

export default Home;
