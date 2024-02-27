// Dev.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { devDesign } from '../data/new';
import { Link } from 'react-router-dom';

const Dev = ({ searchQuery }) => {
  const itemPaths = [
    '/Developers',
    '/Nakheel',
    "/Meraas",
    '/Damac',
    "/Sobha",
    "/Omniyat",
    '/Select_Group',
    '/Ellington',
    '/Binghatti',
    '/Azizi',
    '/Mag',
    '/Iman',
    '/Reportage',
    "/Denube",
    "/Deyaar"
  ];

  const filteredItems = devDesign.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <div className="cards">
        {filteredItems.map((item, index) => (
          <Card className="card-item1" key={item.id}>
            <div className="position-relative">
              <Card.Img variant="top" src={item.src} className="card-img" />
            </div>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text style={{ textAlign: 'left' }}>{item.text}</Card.Text>
              <Link to={itemPaths[index]}>
                <Button variant="primary">Learn more</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Dev;
