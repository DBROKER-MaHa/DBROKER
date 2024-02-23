import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { Mag } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const MagProperties = () => {
  return (
    <div>  




    <div className="content1">

            <h2 className="content6"><strong>MAG Properties</strong></h2>


            <p className="paragraph1">
            MAG Group is a large corporation with a diversified sphere of interests. It successfully runs business in commerce, real estate, service and construction sectors via 50 companies, basing at the Middle East and MENA region: Morocco, Algeria, Tunis, Lebanon, etc.
</p>
            <p className="paragraph">
            The MAG Lifestyle Development's company is known in the Dubai real estate market for projects such as MAG Townhouses and MAG EYE Apartments in MBR City.

</p>
            <p className="paragraph">
            MAG operation history traces back to 1978. The founder and the Chairman of the Group Moafaq Ahmed Al Gaddah, now ranked among the most wealthiest and influential Arabs, started his business from a small-scale spare parts trading in Abu Dhabi.

</p>
            <p className="paragraph">
            MAG Lifestyle Development currently develops the scope of projects evaluating USD 1 bln. “Invest Group Overseas” explores Arab World property market for the opportunities, working with various cases.

</p>

<p className="paragraph">
MAG Group delivers all the scope of real estate services for customers from analyses, planning and buying land to post-development property management, not forgetting about engineering, marketing and sales.

</p>














            <h2 className="content6"><strong>MAG Projects in Dubai</strong></h2>

            <section className="py">

  
  <Container>
  <div className="cards">
    {Mag.map((item) => (
      <Card className="card-item1" key={item.id}>
        <div className="position-relative">
          <Card.Img variant="top" src={item.src} className="card-img" />
          <div className="position-absolute top-0 end-0 p-2 feature">Featured</div>
        </div> 
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>{item.text}</Card.Text>           
        </Card.Body>
      </Card>
    ))}
  </div>
</Container>

    </section>






    </div>
    </div>
  );
};

export default MagProperties;
