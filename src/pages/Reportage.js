import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { Reportage } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const ReportageProperties = () => {
  return (
    <div>  




    <div className="content1">

            <h2 className="content6"><strong>Reportage Properties
</strong></h2>


            <p className="paragraph1">
            Reportage Properties is a private real estate developer based in Abu Dhabi. The company was established and launched their first project Leonardo Residence in 2014.
</p>
            <p className="paragraph">
            The development comprises 175 luxury apartments and it was successfully delivered in 2018. Today, Reportage Properties has a number of off-plan properties in Dubai and Abu Dhabi located at the most popular areas including apartments in Dubailand and Jebel Ali.

</p>
            <p className="paragraph">
            In Dubai, the company has several ongoing projects: Alexis Tower in Jebel Ali and Rukan Tower in Dubailand. All these developments will offer luxury studios and 1-3-bedroom apartments, convenient location with easy access to popular destinations and top-class amenities.



</p>
           



            <h2 className="content6"><strong>Reportage Properties in Dubai</strong></h2>

            <section className="py">

  
  <Container>
  <div className="cards">
    {Reportage.map((item) => (
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

export default ReportageProperties;
