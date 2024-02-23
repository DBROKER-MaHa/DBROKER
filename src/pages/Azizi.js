import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { Azizi } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const AziziProperties = () => {
  return (
    <div>  




    <div className="content1">

            <h2 className="content6"><strong>Azizi Properties
</strong></h2>


            <p className="paragraph1">
            Azizi Developments is a privately-held real estate development company located in Dubai. The company was founded in 2007 by Mirwais Azizi, the chairman of Azizi Group. Under his leadership Azizi Developments built a large property portfolio worth over AED 4.5B.
</p>
            <p className="paragraph">
            The CEO of Azizi Developments is Farhad Azizi. Today, the company has more than 200 projects at various stages of development in Dubai’s most popular locations and over 11,000 residential units successfully delivered and sold to buyers and investors both local and international.

</p>
            <p className="paragraph">
            Only in 2019 alone, Azizi Developments constructed over 1.3 million sq. ft of their new and ongoing projects in Dubai. Over 54 projects will be delivered by 2023 and another 130 are planned to be delivered by 2025.

</p>
            <p className="paragraph">
            The off-plan property by Azizi are Mina, Riviera, Creek Views, Victoria. Every off-plan property offers a convenient payment plan, a DLD fee waiver and a free service period.

</p>

<p className="paragraph">
The latest project by Azizi Developments is Creek Views II. After the Creek Views I was almost completely sold out, Azizi launched Creek Views II. Located at Dubai Healthcare City, this residential project comprises 116 studios, 436 one-bedroom apartments and 35 two-bedroom apartments and also features swimming pools, steam room and sauna, modern gym and playgrounds.


</p>














            <h2 className="content6"><strong>Azizi Properties for Sale in Dubai</strong></h2>

            <section className="py">

  
  <Container>
  <div className="cards">
    {Azizi.map((item) => (
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

export default AziziProperties;
