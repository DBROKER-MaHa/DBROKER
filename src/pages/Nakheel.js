import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { Nakheel } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const NakheelProperties = () => {
  return (
    <div>  
<img
              className="w-60 d-block mx-auto landing" style={{height:"550px"}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJL63Ol0FDr_p14Hd4MNpMCUR9SbbMCXMwKEJeD563vEkhxJilIa5tWVGNEl2hx6bzng&usqp=CAU"
              alt="First slide"
            />

    <div className="content1">

            <h2 className="content6"><strong>NAKHEEL PROPERTIES</strong></h2>


            <p className="paragraph1">
Established in the year 2000 Nakheel Properties is one of Dubai’s largest and most renowned real estate developers. A government-owned company it is best known for its world-famous real estate projects, such as the Palm Jumeirah. The world’s largest man-made island, Palm Jumeirah as the name would suggest is a palm-shaped island that’s home to luxury residential real estate as well as various retail precincts and a host of 5-star hotels.
</p>
            <p className="paragraph">
            In addition to the Palm Jumeirah, Nakheel Properties has also developed several other significant residential, commercial, and leisure developments in Dubai.

</p>
            <p className="paragraph">
            Its more notable residential projects include Jumeirah Lake Towers, Jumeirah Islands, and Jumeirah Park. Whilst these are all master communities Nakheel also builds single tower developments across Dubai’s various communities.

</p>
            <p className="paragraph">
            As far as commercial projects are concerned Nakheel is the developer behind the brand new Nakheel Mall, Ibn Battuta Mall, The Point, and various other leisure destinations.

</p>



<h2 className="content6"><strong>New Projects by Nakheel Properties</strong></h2>
<ul className="list" style={{ listStyleType: 'disc'}}>
<li>► Alaya Gardens</li>
      <li>► Dubai Islands</li>
      <li>► Palm Beach Towers</li>
      <li>► Tilal Al Furjan</li>
      <li>► Jebel Ali Village</li>
      
</ul>
<p className="paragraph1">
This list includes both new projects as well as new communities which are detailed below.
</p>


<h2 className="content6" style={{ fontSize: '1.5rem' }}><strong>New Communities by Nakheel</strong></h2>

<p className="paragraph">
            <strong>Palm Jebel Ali – </strong>
            This highly anticipated and recently revived project stands twice the size of Palm Jumeirah. It aims to add around 110 kilometres of coastline and offer the very best of beachside living for approximately 35,000 residents. Once complete Palm Jebel Ali will feature 80 hotels and resorts, leisure amenities and a wide range of luxury villas and apartment buildings.

</p>

            <p className="paragraph">
            <strong>Dubai Islands  – </strong>
            A highly anticipated development Dubai Islands is set to revolutionize waterfront living across five interconnected islands covering 17 sq km. The project aims to bring in a new level of luxury and opulence and offer a diverse range of experiences on each unique island. From innovative living arrangements to cultural hubs, recreational sports beaches, and beach clubs, Dubai Islands is set to become the new standard when it comes to luxury destinations in Dubai.
Encompassing over 80 luxury resorts and hotels, Dubai Islands will come with more than 20 kilometers of white sandy beaches. The five islands will also boast two square kilometers of parks and open spaces and premium golf courses with jaw-dropping views of the Arabian Gulf and Dubai Skyline. Positioned along Dubai’s northern coastline, all islands will be easily reachable by road bridges as well as water transport in addition to being in close proximity to Dubai’s other top destinations.

</p>



<h2 className="content6" style={{ fontSize: '1.5rem' }}><strong>Nakheel Communities</strong></h2>
<ul className="list" style={{ listStyleType: 'disc'}}>
  <li><FaHandPointRight />  <strong>Palm Jumeirah – </strong>The world’s largest man-made island in the shape of a palm tree.  Home to luxury hotels, villas, and apartments, along with an array of retail, dining, and entertainment options
</li>
  <li><FaHandPointRight />  <strong>Jumeirah Lake Towers – </strong>A mixed-use community featuring a range of high-rise residential and commercial towers set around the community three lakes.
</li>
<li><FaHandPointRight />  <strong>Jumeirah Islands – </strong>A residential community featuring a total of 50 islands home to waterfront villas and townhouses.
</li>

  <li><FaHandPointRight />  <strong>Jumeirah Village Circle – </strong>A residential community in the shape of a circle located on the corner of Sheikh Mohammed Bin Zayed Road and Al Khail Road.
</li>
  <li><FaHandPointRight />  <strong>Jumeirah Park – </strong>Covering an area of over 370 hectares, Jumeirah Park is a family-friendly residential community with over 2,000 villas.
</li>
 
  <li><FaHandPointRight />  <strong>Al Furjan – </strong>A residential development home to a wide range of villas, townhouses, and apartments.
</li>
  <li><FaHandPointRight />  <strong>Warsan Village – </strong>A fully integrated residential development featuring a range of townhouses and apartments, and an array of amenities and facilities.
</li>

</ul>


<p className="paragraph1">
This list represents some of the more notable communities by this master developer. A master developer of course not only builds projects within a community but is also responsible for things like the infrastructure and maintenance of that community.
</p>










<div class="t1">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '0 auto'}}>
            <div>Developer:</div>
            <div >NAKHEEL</div>
            <div>Ownership Structure:</div>
            <div>State Owned</div>
            <div>Founded:</div>
            <div>2000</div>
            <div>Units Delivered:</div>
            <div>30,000+</div>
            <div>Units Under Construction:</div>
            <div>10,000+</div>
            <div>Development Types:</div>
            <div>Master Communities and Residential, Retail, Hospitality and Leisure developments</div>
        </div>
  
        </div>


            <h2 className="content6"><strong>Ellington Properties For Sale</strong></h2>

            <section className="py">

  
  <Container>
  <div className="cards">
    {Nakheel.map((item) => (
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




    <h2 className="content6" style={{ fontSize: '1.8rem' }}><strong>DEVELOPMENT TYPES</strong></h2>


<p className="paragraph1">
Developer of more than just iconic projects and communities Nakheel Properties is also known for building and managing some of Dubai’s best-known shopping destinations. The companies existing retail developments in Dubai include Ibn Battuta Mall, Dragon Mart, Nakheel Mall, Golden Mile Galleria, The Pointe, Club Vista Mare, Souk Marfa, Souk Warsan, The View at The Palm

</p>

<img
              className="w-100 d-block landing" style={{height:"750px"}}
              src="https://off-planproperties.b-cdn.net/wp-content/uploads/2023/08/Nakheel-Mall-at-Palm-Jumeirah.jpg"
              alt="First slide"
            />

<p className="paragraph1">
Nakheel Hospitality’s project portfolio comprises a range of strategically located hotels and resorts. These cater to a wide range of clientele, ranging from five-star establishments to modest 3-star accommodation options. Some of the company’s better-known hotels include; Premier Inn Ibn Battuta Mall, Avani Ibn Battuta, ibis Styles Dragon Mart, Premier Inn Dragon Mart, Hotel Riu Dubai and Centara Mirage Resort Dubai.


</p>




    </div>
    </div>
  );
};

export default NakheelProperties;
