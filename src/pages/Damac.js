import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { ellington } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const DamacProperties = () => {
  return (
    <div>  


    <div className="content1">

            <h2 className="content6"><strong>DAMAC PROPERTIES</strong></h2>


            <p className="paragraph1">
It would be almost impossible to talk about Dubai’s off plan properties without the word DAMAC being mentioned. Established in 2002, Damac Properties has cemented its spot as one of Dubai’s largest and most prominent developers. With projects spanning the GCC, the wider Middle East, and the United Kingdom this developer is also becoming a force on the world stage.

</p>
            <p className="paragraph">
            Locally, however, DAMAC Properties is best known for its development of multi-million square-foot golf course communities as well as high-end and high-rise residential apartment towers. Some of the better-known projects include communities such as Damac Hills along with high-end residential projects like the Paramount Towers and Nine Elms London.

</p>
            <p className="paragraph">
            Along with its extensive list of off-plan projects, DAMAC is also famous for its successful collaborations with luxury brands such as Versace, Bugatti, and Fendi. Furthermore, it is also involved in operating and managing numerous serviced hotel apartments and fully-fledged five-star hotels.

</p>
            <p className="paragraph">
            With a multitude of new projects on the way the future for Damac looks brighter than ever

</p>




            <h2 className="content6" style={{ fontSize: '1.5rem' }}><strong>NEW PROJECTS BY DAMAC</strong></h2>
<ul className="list" style={{ listStyleType: 'disc'}}>
  <li><FaHandPointRight />    Beverly Hiss Drive at DAMAC HILLS
</li>
<li><FaHandPointRight />    Cavalli Estates at DAMAC HILLS
</li>
<li><FaHandPointRight />    Portofino at DAMAC HILLS
</li>
<li><FaHandPointRight />    Green Acres at DAMAC HILLS
</li>
<li><FaHandPointRight />    Safa One and Two
</li>
<li><FaHandPointRight />    Golf Gate
</li>
<li><FaHandPointRight />    Cavalli Tower
</li>
<li><FaHandPointRight />    Bellavista
</li>
<li><FaHandPointRight />    DAMAC Bay by Cavali
</li>

</ul>




<div style={{ display: 'flex' }}>
  <div style={{ flex: 1, paddingRight: '10px' }}>
    <h2 className="content6" style={{ fontSize: '1.3rem' }}><strong>DAMAC TOWNHOUSE PROJECTS</strong></h2>
    <ul className="list" style={{ listStyleType: 'disc' }}>
    <li>► Alaya Gardens</li>
      <li>► Elysian Mansions</li>
      <li>► Lani Islands</li>
      <li>► Serenity Mansions</li>
    
    </ul>
  </div>

  <div style={{ flex: 1, paddingLeft: '10px' }}>
    <h2 className="content6" style={{ fontSize: '1.3rem' }}><strong>DAMAC VILLA PROJECTS</strong></h2>
    <ul className="list" style={{ listStyleType: 'disc' }}>
    <li>► Harmony</li>
      <li>► Harmony II</li>
      <li>► Harmony III</li>
      <li>► Harmony Bungalows</li>
     

    </ul>
  </div>
</div>




          

<h2 className="content6" style={{ fontSize: '1.5rem' }}><strong>DAMAC COMMUNITIES</strong></h2>

            <p className="paragraph1">
            More than simply a developer of of residential projects, DAMAC is also a master developer responsible for a number of fully integrated master communities.
</p>
            <p className="paragraph">
            <strong>DAMAC Lagoons: </strong>A Mediterranean-inspired community offering a waterfront living experience in Dubailand.

</p>
            <p className="paragraph">
            <strong>DAMAC Hills: </strong>This is an established golf community in Dubailand, built around the Trump International Golf Club Dubai, and offers a mix of luxurious villas, apartments, and a hotel.

</p>

<p className="paragraph">
            <strong>DAMAC Hills 2 (previously known as AKOYA Oxygen): </strong>A master community offering luxury homes surrounded by water features and a wealth of sports and leisure experiences.

</p>










    </div>
    </div>
  );
};

export default DamacProperties;
