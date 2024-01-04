import { bestDesign } from '../data/new'
import { Container, Row, Col, Card } from 'react-bootstrap'

function BestDesign() {
  return (
    <Container>
      <Row className="g-4">
         {bestDesign.map((item)=>(
            <Col md={4} key={item.id}>
                <Card >
                <Card.Body>
                    <Card.Img
                     
                     src={item.src}
                    className="card-img"/>
                    <Card.Title className='text-center mt-2'>{item.place}</Card.Title>
                    
                </Card.Body>
            </Card>
            </Col>
         ))}
      </Row>
    </Container>
  )
}

export default BestDesign
