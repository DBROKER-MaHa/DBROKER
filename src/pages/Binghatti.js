import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { Binghatti } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const BinghattiProperties = () => {
  return (
    <div>  

    <div className="content1">

            <h2 className="content6"><strong>BINGHATTI PROJECTS DUBAI</strong></h2>

            <p className="paragraph1">
            Binghatti is one of Dubai’s most prominent developers and the real estate division of Binghatti Holdings. Based in the DIFC Binghatti Holdings is one of Dubai’s largest holding companies operating in various markets for over 15 years.

</p>
            <p className="paragraph">
            With a strong focus on artistic and affordable homes Binghatti has an impressive portfolio of over forty projects with a combined value in excess of AED 3.5 Billion. Development locations are vast and include Jumeirah Village Circle, Silicon Oasis, Business Bay and more.

</p>
            <p className="paragraph">
            Possessing strong, forward-thinking management and extensive experience Binghatti is already one of Dubai’s best known off plan property developers. With aggressive future growth plans and new developments being announced its reputation is set to only grow bigger from here.

</p>
           


            <h2 className="content6" style={{ fontSize: '1.5rem' }}><strong>NEW PROJECTS BY BINGHATTI </strong></h2>
            <ul className="list" style={{ listStyleType: 'disc' }}>
    <li>►Binghatti Nova in Jumeirah Village Circle JVC</li>
      <li>► Bugatti Residences by Binghatti</li>
      <li>► Mercedes Benz Place</li>
      <li>► Phantom Binghatti</li>
    
    </ul>








<div style={{ display: 'flex' }}>
  <div style={{ flex: 1, paddingRight: '10px' }}>
    <h2 className="content6" style={{ fontSize: '1.3rem' }}><strong> BINGHATTI APARTMENT PROJECTS</strong></h2>
    
    
    <ul className="list" style={{ listStyleType: 'disc' }}>
  <li>► Burj Binghatti Jacob & Co Residences – Business Bay</li>
  <li>► Binghatti Nova – Jumeirah Village Circle (JVC)</li>
  <li>► Binghatti Crescent – JVC</li>
  <li>► Binghatti Creek – Al Jaddaf</li>
  <li>► Binghatti Gems – JVC</li>
  <li>► Binghatti Canal – Business Bay</li>
  <li>► Binghatti Gate – JVC</li>
  <li>► Binghatti Avenue – Al Jaddaf</li>
  <li>► Binghatti Gateway – Al Jaddaf</li>
  <li>► Binghatti Heights – JVC</li>
  <li>► Millennium Binghatti Residences – Business Bay</li>
  <li>► Binghatti Point – Dubai Silicon Oasis</li>
  <li>► Binghatti Apartments – Dubai Silicon Oasis</li>
  <li>► Binghatti Stars – Dubai Silicon Oasis</li>
  <li>► Binghatti Rose – JVC</li>
  <li>► Binghatti Horizons – Dubai Silicon Oasis</li>
  <li>► Binghatti Sapphires – Dubai Silicon Oasis</li>
</ul>

  </div>

  <div style={{ flex: 1, paddingLeft: '10px' }}>
    <h2 className="content6" style={{ fontSize: '1.3rem' }}><strong>DAMAC VILLA PROJECTS</strong></h2>
    <ul className="list" style={{ listStyleType: 'disc' }}>
  <li>► Binghatti Views – Dubai Silicon Oasis</li>
  <li>► Binghatti Platinum – Dubai Silicon Oasis</li>
  <li>► Binghatti Jewels – Liwan</li>
  <li>► Binghatti Court – JVC</li>
  <li>► Binghatti Gardens – Dubai Silicon Oasis</li>
  <li>► Binghatti East Boutique Suites – Liwan</li>
  <li>► Binghatti Terraces – Dubai Silicon Oasis</li>
  <li>► Binghatti Crystals – Dubai Silicon Oasis</li>
  <li>► Binghatti Vista – Dubai Silicon Oasis</li>
  <li>► Binghatti Pearls – Dubai Silicon Oasis</li>
  <li>► Binghatti West Boutique Suites – Liwan</li>
  <li>► Binghatti Jasmine – JVC</li>
  <li>► Binghatti Diamonds – Dubai Silicon Oasis</li>
  <li>► Binghatti Residences – Dubai Silicon Oasis</li>
  <li>► Binghatti Luna – JVC</li>
  <li>► Binghatti Crest – JVC</li>
  <li>► Binghatti Mirage – JVC</li>
</ul>

  </div>
</div>

<h2 className="content6"><strong>Ellington Properties For Sale</strong></h2>

<section className="py">


<Container>
<div className="cards">
{Binghatti.map((item) => (
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


          



<h2 className="content6" style={{ fontSize: '1.5rem' }}><strong>PARTNERSHIPS AND COLLABORATIONS</strong></h2>

            <p className="paragraph1">
            Binghatti Developers has distinguished itself within the Dubai real estate market. I has achieved this not just through its innovative designs and projects but also through strategic partnerships and collaborations. These alliances span across various industries, including luxury automotive brands and high-end fashion. Just some of the more recent collaborations include Mercedes Benz and Bugatti.

</p>
          


    </div>
    </div>
  );
};

export default BinghattiProperties;
