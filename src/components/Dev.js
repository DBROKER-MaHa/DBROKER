import { Container, Card, Button } from "react-bootstrap";
import { devDesign } from "../data/new";
import React from "react";
import { Link } from 'react-router-dom';

function Dev() {
  const itemPaths = [
    "/Developers",
    "/FAQ",
   
  ];

  return (
    <Container>
      <div className="cards">
        {devDesign.map((item,index) => (
          <Card className="card-item1" key={item.id}>
            <div className="position-relative">
              <Card.Img variant="top" src={item.src} className="card-img" />
            </div>
            
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text style={{ textAlign: "left" }}>{item.text}</Card.Text>
              <Link to={itemPaths[index]}>
                <Button variant="primary">Learn more</Button>
              </Link>           
              </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Dev;
