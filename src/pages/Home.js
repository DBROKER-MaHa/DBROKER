import Landing from "../components/Landing";
import {  Card, ListGroup } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { newProject } from "../data/new";
import AboutUs from "../components/AboutUs";
import BestDesign from "../components/BestDesign";
function Home() {
  const extractedData = newProject.slice(0, 6);
  return (
    <>
      <Landing />
      <section className="py-7">
        <div className="bg-black text-white new-project d-flex align-items-center">
          <h2 className="container">New Project</h2>
        </div>
        <div className="cards container my-10">
        {extractedData.map((item) => (
          <Card className="card-item" key={item.id}>
           <div className="position-relative">
           <Link  to = {`/newProject/${item.id}`}>
           <Card.Img
              variant="top"
              src={item.src}
             className="card-img"
            />
            </Link>
         
            <div className="position-absolute top-0 end-0 p-2 feature">Featured</div>
           </div>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Estimated Price: {item.price}</ListGroup.Item>
              <ListGroup.Item>Location: {item.location}</ListGroup.Item>
              <ListGroup.Item>Float Area: {item.area}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
      </section>
      <section className="py-7 my-10">
        <div className="bg-black text-white new-project d-flex align-items-center mb-5">
          <h2 className="container">Why Use Us</h2>
        </div>
        <AboutUs />
      </section>
      <section className="py-7">
        <div className="bg-black text-white new-project d-flex align-items-center mb-5">
          <h2 className="container">Best Design</h2>
        </div>
        <BestDesign />
      </section>
    </>
  );
}

export default Home;
