import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { Iman } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const ImanProperties = () => {
  return (
    <div>  




    <div className="content1">

            <h2 className="content6"><strong>Iman Developers</strong></h2>


            <p className="paragraph1">
            Iman Developers Company was founded back in 2016 and made a particularly strong entrance to the Dubai real estate market with its flagship project of Jumeirah Village Circle. The company implements projects of residential complexes with apartments and villas in both classical and modern styles of architecture. Taking into account that Iman is known for the delivery of projects on time, it is not surprising that its developments are highly popular among real estate investors worldwide.
</p>
            <p className="paragraph">
            The company's mission is to bring its clients' idea of an ideal home to life. All Iman's projects are the result of research into the tastes and needs of its customers, with the emphasis being made on creating a comfortable living space. The developments are equipped with swimming pools, gyms and children's playgrounds for the utmost convenience and comfort of their occupants. At the same time, the company's employees are guided by a philosophy of excellence, which leads to a meticulous layout, trendy interiors and cutting-edge technology in their properties for sale.

</p>
            <p className="paragraph">
            The fast-growing company is headquartered in Dubai's Business Bay district in the Exchange Tower building. The business was recognized as one of the best developers at Expo 2020, having been ranked among the top 10 projects with the fastest delivery times. The popularity of real estate is based on three elements: advantageous location of residential communities, trendy interiors and an abundance of modern amenities.


</p>
           



            <h2 className="content6"><strong>Properties for Sale by Iman Developers</strong></h2>

            <section className="py">

  
  <Container>
  <div className="cards">
    {Iman.map((item) => (
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

export default ImanProperties;
