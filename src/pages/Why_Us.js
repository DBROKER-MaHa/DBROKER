import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card } from 'react-bootstrap';
import Title from '../components/Title.js';
import '../index.js';

const Why_UsPage = () => {
  return (

    <>

 

<section className="py-7">
  <Title title = "About Us"/>
<Card className="container hy">
     <Card.Body>
        <Card.Title>Who we are?</Card.Title>
        <Card.Text>
          Off-planproperties.ae is a Dubai based property consultancy formed by a close group of real estate brokers from Australia and the UK. With years of combined property experience we pride ourselves as being up to date with local market knowledge, thoroughly professional and customer-centric.
        </Card.Text>

        <Card.Title>What we do?</Card.Title>
        <Card.Text>
          What we do is actually rather simple. We specialize in off-plan developments and have existing relationships with Dubai’s biggest and most trusted developers. What this means for our clients is, they are not limited to choosing a product from one developer only, but rather having the option to choose from the entire range of products available from all the major developers. This essentially means they choose the very best product available every time.
        </Card.Text>

        <Card.Text>
          Along with property in Dubai we can also assist with UK property. We work with a huge range of UK developers and can offer these to buyers right here in Dubai. See our Buy UK Property in Dubai section for more details.
        </Card.Text>

        <Card.Title>Our fees?</Card.Title>
        <Card.Text>
          Our services are 100% free. Our fee is derived from the developer themselves meaning we offer unbiased advice that’s based solely on your preferences and requirements.
        </Card.Text>

         <Card.Title>Why use us?</Card.Title>
        <Card.Text>
          <ul>
            <li>Access to full range of off-plan properties from ALL major developers.</li>
            <li>Early Access to Development stock, pre-public launch.</li>
            <li>Top Market knowledge and a thoroughly professional service.</li>
            <li>ROI Reports and Projections.</li>
            <li>Market Reports including latest sold prices.</li>
            <li>Unbiased advice based on your requirements.</li>
            <li>100% Free Service/ NO commission.</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
      </section> 
    
    </>
  );
};

function Why_Us() {
  return (
    <div className="Why_Us">
      <Why_UsPage />
    </div>
  );
}

export default Why_Us;
