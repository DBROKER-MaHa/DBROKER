import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { Select_Group } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const Select_GroupProperties = () => {
  return (
    <div>  




    <div className="content1">

            <h2 className="content6"><strong>Select Group in Dubai</strong></h2>


            <p className="paragraph1">
            Select Group company is a diversified company based in Dubai, United Arab Emirates with proved competences in real estate development, investments, hospitality and retail.
</p>
            <p className="paragraph">
            Established in 2002, the Select Group developer has many residential, commercial and mixed-use developments across the United Arab Emirates, Saudi Arabia, Europe and the UK.

</p>
            <p className="paragraph">
            The most famous projects of Select Group are Marina Gate, Studio One and The Torch in Dubai Marina. The Group’s first project in Dubai was The Torch, which was the tallest residential tower in the world at the time of its completion in May 2011.

</p>
            <p className="paragraph">
            The founder and CEO of Select Group is Rahail Aslam. With the lead of Rahail the company has delivered 5.5M sq. ft of development in Dubai and has 7M sq. ft in progress to date.

</p>

<p className="paragraph">
After the successful launch of Marina Gate in 2014 Select Group has proved itself as one of the leading private real estate company in the United Arab Emirates.

</p>














            <h2 className="content6"><strong>MAG Projects in Dubai</strong></h2>

            <section className="py">

  
  <Container>
  <div className="cards">
    {Select_Group.map((item) => (
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

export default Select_GroupProperties;
