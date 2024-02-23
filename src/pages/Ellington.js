import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { ellington } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const EllingtonProperties = () => {
  return (
    <div>  
<img
              className="w-60 d-block mx-auto landing" style={{height:"550px"}}
              src="https://off-planproperties.b-cdn.net/wp-content/uploads/2016/10/ellington-dubai-off-plan-e1475407983781.jpg"
              alt="First slide"
            />

    <div className="content1">

            <h2 className="content6"><strong>ELLINGTON PROPERTIES</strong></h2>
            <p className="paragraph1">
            Ellington is one of Dubai’s newest and more exciting developers to enter the market in recent years. Founded in 2014 and managed by Robert D Booth, the former head of Emaar’s Real Estate Division, Ellington brings to the market a wealth of knowledge and experience in high-end project development.
</p>
            <p className="paragraph">
            With a focus on quality over quantity, this boutique developer aims to deliver products that feature an inspirational design that’s both practical and trend-setting.

</p>
            <p className="paragraph">
            As of 2023, Ellington has completed a wide range of luxury projects in some of Dubai’s most sought-after locations including Downtown, MBR City, Palm Jumeirah and Emirates Hills.

</p>
            <p className="paragraph">
            It’s current and recently released off-plan projects include an ultra-luxury apartment project on the world’s famous Palm Jumeirah as well as a stunning new twin tower project in Jumierah Lake Towers.

</p>


<div class="t1">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '0 auto'}}>
            <div>Developer:</div>
            <div >Ellington Properties</div>
            <div>Established:</div>
            <div>2014</div>
            <div>Managing Director:</div>
            <div>Robert Booth</div>
            <div>Units Delivered:</div>
            <div>5,000+</div>
            <div>Projects Under Construction:</div>
            <div>10+</div>
        </div>
  
        </div>


            <h2 className="content6"><strong>New Projects by EMAAR Properties</strong></h2>
<ul className="list" style={{ listStyleType: 'disc'}}>
  <li><FaHandPointRight />  Boutique developer with a strong emphasis on design and quality</li>
  <li><FaHandPointRight />  Managed by a strong team with a wealth of extraordinary experience</li>
  <li><FaHandPointRight />  Super track record for not only completing projects on time but often ahead of schedule</li>
  <li><FaHandPointRight />  Great range of luxury projects across some of Dubai’s most in demand areas including Palm Jumeirah, Downtown Dubai and Jumeirah Lake Towers.</li>
  <li><FaHandPointRight />  Reputation focused company well on its way to establishing itself as one of Dubai’s best and most trusted property developers</li>
  <li><FaHandPointRight />  Comprehensive 2-year warranty on all projects giving you the ultimate peace of mind</li>
 
</ul>


<h2 className="content6"><strong>New Projects by Ellington Properties</strong></h2>
<ul className="list" style={{ listStyleType: 'disc'}}>
  <li><FaHandPointRight />  Ocean House</li>
  <li><FaHandPointRight />  The Highbury</li>
  <li><FaHandPointRight />  Palm Jumeirah Villas</li>
  <li><FaHandPointRight />  Upper House in JLT</li>
  <li><FaHandPointRight />  The Sanctuary</li>
  <li><FaHandPointRight />  The Lakeshore</li>
  <li><FaHandPointRight />  Mercer House JLT</li>

</ul>




            <h2 className="content6"><strong>Ellington Properties For Sale</strong></h2>

            <section className="py">

  
  <Container>
  <div className="cards">
    {ellington.map((item) => (
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



            {/* <section className="video-section">
                <Container>
                    <div className="video-container">
                        <a href="https://youtu.be/mvuZ1UsMThU" target="_blank" rel="noopener noreferrer">
                            Watch Video
                        </a>
                    </div>
                </Container>
            </section> */}

<h2 className="content6"><strong>Ellington Property Types and Attributes</strong></h2>
            <p className="paragraph1">
            Ellington Properties is a Dubai-based developer known for its contemporary and luxury real estate projects. These include high-end <strong>apartments,</strong> <strong>townhouses</strong> and <strong>villa</strong> developments.

</p>
            <p className="paragraph">
            <strong>Apartments: </strong>Apartments make up roughly 90% of all project types developed by Ellington.  These are characterized by high-quality finishes, modern designs, and a superb level of attention to detail. Ellington apartments often feature bigger-than-average sizes along with premium materials, and hotel-like amenities.


</p>
            <p className="paragraph">
            For the most part apartment projects by Ellington tend to be located in low to mid-rise apartment buildings, although the company does have some high-rise developments as well. Bedroom types vary depending on the project but tend to include everything from cozy Studios to larger 3/4 bedroom options.


</p>
           
<h2 className="content6"><strong>Ellington Project Locations</strong></h2>
<p className="paragraph1">
As one of Dubai’s more active developers Ellington Properties has projects in some of Dubai’s most sought-after locations and communities. A list of some of those locations and the company’s projects within can be found below:


</p>

<ul className="list" style={{ listStyleType: 'disc'}}>
  <li><FaHandPointRight />  Palm Jumeirah – Ellington projects within Palm Jumeirah include both villas and luxury apartments. Its two latest projects include “Ocean House” and “Ellington Beach House”
</li>
  <li><FaHandPointRight />  Downtown Dubai – Ellington one and only project within the Downtown Dubai district is DT1. A true high end luxury project thats won numerous awards for its design and quality.
</li>
  <li><FaHandPointRight />  Jumeirah Village Circle – The home of some of the very first projects by Ellington including Belgravia I and II and more recently “The Portman”
</li>
  
</ul>




    </div>
    </div>
  );
};

export default EllingtonProperties;
