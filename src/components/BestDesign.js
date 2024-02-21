import { agent } from "../data/new";
import { Container, Row, Col, Card } from "react-bootstrap";

function BestDesign() {
  return (
    <Container>
      <Row className="g-4">
        {agent.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="border border-4 border-primary position-relative">
              <>
                <img src={item.src} alt = '' className="agent-img" />
                <Card.Title className='position-absolute bottom-0 bg-white text-center w-100 p-2 fs-4'>{item.name}</Card.Title>
              </>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BestDesign;
