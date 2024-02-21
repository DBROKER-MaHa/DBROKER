import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
// import { devDesign } from "../data/new";
import { beachFront } from "../data/new";
import { downTown } from "../data/new";
import { dubaiCreek } from "../data/new";
import { dubaiHeels } from "../data/new";


const EmaarProperties = () => {
  return (
    <div className="content1">

            <h2 className="content6"><strong>EMAAR PROPERTIES OFF PLAN PROJECTS</strong></h2>
            <p className="paragraph1">
              EMAAR Properties is a publicly listed company established in 1997 and by far and away Dubai’s biggest and best-known developer.
            </p>
            <p className="paragraph">
              Whilst a somewhat new company by global standards what EMAAR has managed to accomplish since its incorporation is simply astonishing. This pioneering developer of integrated master-planned communities has single-handedly transformed the real estate sector in Dubai.
            </p>
            <p className="paragraph">
              Known for its unrivaled quality and design, some of Emaar’s record-breaking developments include the Burj Khalifa, The Dubai Mall, and The Dubai Fountain. Whilst the company’s flagship development continues to be Downtown Dubai, it is also responsible for creating numerous award-winning communities. These include but are not limited to Arabian Ranches, Emirates Living, Dubai Marina, and of course Emaar Beachfront.
            </p>
            <p className="paragraph">
              As of 2023, the company has delivered over 83,000 residential units in Dubai and other markets.
            </p>
          
            <h2 className="content6"><strong>New Communities by EMAAR Properties</strong></h2>
            <ul className="list">
              <li>Emaar Beachfront</li>
              <li>Dubai Creek Harbour</li>
              <li>Dubai Hills Estate</li>
              <li>The Valley</li>
              <li>The OASIS by Emaar</li>
              <li>Rashid Yachts and Marina</li>
            </ul>
            <p className="paragraph">
            More than just a developer of world-renowned projects such as the Burj Khalifa, Emaar Properties is a developer of fully integrated master communities. Communities that incorporate not just residential apartments or villas but everything usually found in small cities. Town centers with vast retail and F&B outlets, healthcare centers, recreational areas, and world-class infrastructure to name a few.
            </p>
            <h2 className="content6"><strong>New Projects by EMAAR Properties</strong></h2>
            <ul className="list">
              <li>Farm Gardens at The Valley</li>
              <li>Fairway Villas at Dubai South</li>
              <li>ANYA at Arabian Ranches 3</li>
              <li>Palace Residences – North at Dubai Creek</li>
              <li>Savanna at Dubai Creek Harbour</li>
              <li>Greenside Residences at Dubai Hills Estate</li>
              <li>Seascape at Rashid Yachts and Marina</li>
              <li>NIMA The Valley</li>
              <li>Parkside Views at Dubai Hills Estate</li>
              <li>Club Drive at Dubai Hills</li>
            </ul>
            <h2 className="content6"><strong>EMAAR PROPERTIES FOR SALE</strong></h2>

            <section className="py">
  <p2 className="centered">
    <span style={{ marginLeft: '50px', color: 'blue' }}>{Array(80).fill('-').join('')}</span> EMAAR BEACHFRONT <span style={{ marginLeft: '0px', color: 'blue' }}>{Array(80).fill('-').join('')}</span>
  </p2>
  <Container>
      <div className="cards">
        {beachFront.map((item) => (
          <Card className="card-item1" key={item.id}>
            <div className="position-relative">
              <Card.Img variant="top" src={item.src} className="card-img" />
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




<section className="py">
  <p2 className="centered">
    <span style={{ marginLeft: '50px', color: 'blue' }}>{Array(80).fill('-').join('')}</span> DOWNTOWN DUBAI <span style={{ marginLeft: '0px', color: 'blue' }}>{Array(80).fill('-').join('')}</span>
  </p2>
  <Container>
      <div className="cards">
        {downTown.map((item) => (
          <Card className="card-item1" key={item.id}>
            <div className="position-relative">
              <Card.Img variant="top" src={item.src} className="card-img" />
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

 
<section className="py">
  <p2 className="centered">
    <span style={{ marginLeft: '50px', color: 'blue' }}>{Array(80).fill('-').join('')}</span> DUBAI CREEK HARBOUR <span style={{ marginLeft: '0px', color: 'blue' }}>{Array(80).fill('-').join('')}</span>
  </p2>
  <Container>
      <div className="cards">
        {dubaiCreek.map((item,index) => (
          <Card className="card-item1" key={item.id}>
            <div className="position-relative">
              <Card.Img variant="top" src={item.src} className="card-img" />
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


<section className="py">
  <p2 className="centered">
    <span style={{ marginLeft: '50px', color: 'blue' }}>{Array(80).fill('-').join('')}</span> DUBAI HILLS ESTATE <span style={{ marginLeft: '0px', color: 'blue' }}>{Array(80).fill('-').join('')}</span>
  </p2>
  <Container>
      <div className="cards">
        {dubaiHeels.map((item,index) => (
          <Card className="card-item1" key={item.id}>
            <div className="position-relative">
              <Card.Img variant="top" src={item.src} className="card-img" />
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
  );
};

export default EmaarProperties;
