import { Container, Card, ListGroup } from "react-bootstrap";
// import { newProject } from "../data/new";
import React, { useState } from "react";
import PagePagination from "./PagePagination";
import { Link } from "react-router-dom";


function ProjectCard({category}) {
 


  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(category.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentCardItems = category.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <Container>
      <div className="cards">
        {currentCardItems.map((item) => (
          <Card className="card-item" key={item.id}>
          <div className="position-relative">
          <Link to={`/newProject/${item.id}`}>
          <Card.Img
             variant="top"
             src={item.src}
            className="card-img"
           />
           </Link>
           
           <div className="position-absolute top-0 end-0 p-2 feature">{item.type}</div>
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
      <div className="d-flex justify-content-center my-3">
        <PagePagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
}

export default ProjectCard;
