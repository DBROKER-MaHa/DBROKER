import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
// import { devDesign } from "../data/new";
import { beachFront } from "../data/new";
import { downTown } from "../data/new";
import { dubaiCreek } from "../data/new";
import { dubaiHeels } from "../data/new";
import { FaHandPointRight } from "react-icons/fa";


const EmaarProperties = () => {
  return (
    <div>  
<img
              className="w-100 d-block landing" style={{height:"750px"}}
              src="https://newdevelopments.ae/uploads/developers/Emaar_1656937882.png"
              alt="First slide"
            />

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
            <div class="centered-list">

            <ul className="list">
            <li><a href="#beachfront">Emaar Beachfront</a></li>
            <li><a href="#Downtown">Downtown Dubai</a></li>
            <li><a href="#creek-harbour">Dubai Creek Harbour</a></li>
            <li><a href="#hills-estate">Dubai Hills Estate</a></li>
            <li><a href="#the-valley">The Valley</a></li>
            <li><a href="#oasis">The OASIS by Emaar</a></li>
            </ul>

            </div>

            
            <p className="paragraph">
            More than just a developer of world-renowned projects such as the Burj Khalifa, Emaar Properties is a developer of fully integrated master communities. Communities that incorporate not just residential apartments or villas but everything usually found in small cities. Town centers with vast retail and F&B outlets, healthcare centers, recreational areas, and world-class infrastructure to name a few.
            </p>
            <h2 className="content6"><strong>New Projects by EMAAR Properties</strong></h2>
<ul className="list" style={{ listStyleType: 'disc'}}>
  <li><FaHandPointRight />  Farm Gardens at The Valley</li>
  <li><FaHandPointRight />  Fairway Villas at Dubai South</li>
  <li><FaHandPointRight />  ANYA at Arabian Ranches 3</li>
  <li><FaHandPointRight />  Palace Residences – North at Dubai Creek</li>
  <li><FaHandPointRight />  Savanna at Dubai Creek Harbour</li>
  <li><FaHandPointRight />  Greenside Residences at Dubai Hills Estate</li>
  <li><FaHandPointRight />  Seascape at Rashid Yachts and Marina</li>
  <li><FaHandPointRight />  NIMA The Valley</li>
  <li><FaHandPointRight />  Parkside Views at Dubai Hills Estate</li>
  <li><FaHandPointRight />  Club Drive at Dubai Hills</li>
</ul>


   <div class="icons">
<div class="row">
    <div class="col-md-3">
<div className="col-md-4 col-width  d-flex align-items-center  flex-column ">
        <div className="about-iconContainer d-flex align-items-center justify-content-center ">
        <img src="data:image/png;base64,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" className="about-icon" alt="" />
        </div>
          <h5 className="my-3">Dubai's Best Resale Brand</h5>        
        </div>
        </div>


        <div class="col-md-3">

        <div className="col-md-4 col-width  d-flex align-items-center  flex-column ">
        <div className="about-iconContainer d-flex align-items-center justify-content-center ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiu9kFu2VWWr_bqAK5u0RMoADdrcWIMISiYA&usqp=CAU" className="about-icon" alt="" />
        </div>
        <h5 className="my-3">Most Trusted Brands</h5>        

        </div>
        </div>


        <div class="col-md-3">

        <div className="col-md-4 col-width  d-flex align-items-center  flex-column ">
        <div className="about-iconContainer d-flex align-items-center justify-content-center ">
        <img src="data:image/png;base64,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" className="about-icon" alt="" />
        </div>
        <h5 className="my-3">Proven Capital Appreciation</h5>        

        </div>
        </div>


        <div class="col-md-3">


        <div className="col-md-4 col-width  d-flex align-items-center  flex-column ">
        <div className="about-iconContainer d-flex align-items-center justify-content-center ">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAclBMVEX///8AAADr6+uysrIUFBQxMTGEhIQODg7d3d2Hh4fNzc38/PxmZmZDQ0Pz8/PT09NISEg8PDyWlpa1tbXm5uYlJSVqampXV1ednZ339/d3d3dvb28ZGRkgICCmpqbp6em+vr6Pj49PT08sLCxfX1/FxcWVyEoGAAAEGklEQVR4nO3c63KqMBQFYFIrolRAvFIvVdu+/yueMTtQgtza2XOI2/X9OcJRJ66BsBNCPQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBHtLz4l+XL0M14AJGviB8N3RTXBQeVOwZDN8ZtH6psNXRznDa3spqHQ7fHYSMT0sT8Oxq6QQ5b64Q2mZe96VeLoRvkrlgHlOjXdDaie29y0fnM9OsZTsJWi1s8Y3od6qymwzbIXRSPb7Y+bxtvgzbIYYHOamm2rreN7aANctjI6s4TZNVio0urzGyNcQ42o+6qOJKszgtsVCWczFakt3aDtshde2u8THXpecD2OCyyRzUn1O3NUusUpI7+kLV94mllNLNQTIbaHT2U0VjwPd8M0LU3WlVmQlN0V4229mFFlega3VUNMyFa3OhaVaKDAvVOKi12pKWZLCjL9MRVPnN1c7xtv+LWRFVoKnYVF7tmGAw22FXPQCpEcRW8d1bVuvPFHu5AjgbJ6lBavlAZ7oBhitDyCZe96j0oripeTFTn0r4RevY60VHdD/wSe7gDmims1NQrlVJmIiue2eJg9cz1VnilqPbWXlPE11lc4oavkmN1uc4rNsvQowUe6ss+Xl6as7rF9T3Qb/hPlrW/emtWOybVU2vRGpbaSz4V49afPr6rDWbtWamt4LC2bT/8ULOENk7aw5JbTkStv7u+NPgI7s1G/tp8SOxIkfrq5K1sk69y/OV17ZuWKYtdakRZLe2dZmn2sv4jzeggHXe/8TFRVpUVeq9/PT6m+oNSnxNozmrt/f6KRoNFqU+gNGf1l1MpRVa96cH2J0vDHMSaFc0ui70ZxphVcP1TpfE4uLIKZ1+mKJO7MpIrq2Ku5iC1Z2c8B2n5mujnCvn6K5rvStha5h6+rMwNHsGzfYzXQbrtuuFqmXs46ys9ZXqQO9fHmdVJ9AiHN6tv/V1ybx1yZvWO46qniKISO3LmyioLTuZ2orqwNs8pLFllx3yEoyZSJ0U9ruPqVGQlecUtU39l7hlOJEfFlZW5ey34BPT4roO0WlnwJIPHlxUdWLJXkbLNi+pLodipdo2tFtV/Ymbf/b4HxpUVfY/cNTI3TFmt5nXfIwxDVmFcDHBQM3T4WW4rdjURYciqWG4r/RkdjnPQRJVIf+6Eo2/Xb5/s5E60Gy1r1XoX4frtguetci1Z9f0DDHQOpt1vfHRt60XVV6+58+AJSiut7pmRyc/L9x4zB7RIVOxKoh/ZpCassqN/DlovcLRG9Ckeq993ZJUfa03M/wsvQ8mqIZx9x0NKFbJHN7ngs+63+16Y/iKqJ+jZtfB8mVbsdJcepevulDTZ86H9hPF03p1U8gTXwH6i4HxKp36T6Un2DQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD1Dwm2JE+DD8/eAAAAAElFTkSuQmCC" className="about-icon" alt="" />
        </div>
          <h5 className="my-3">Biggest Property Developer</h5>        
        </div>
        </div>
</div>
</div> 


            <h2 className="content6"><strong>EMAAR PROPERTIES FOR SALE</strong></h2>

            <section className="py">

  <p2 className="centered">
    <span id="beachfront"> EMAAR BEACHFRONT </span>
  </p2>
  <Container>
  <div className="cards">
    {beachFront.map((item) => (
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



<section className="py">
  <p2 className="centered">
    <span id="Downtown"> DOWNTOWN DUBAI </span>
  </p2>
  <Container>
      <div className="cards">
        {downTown.map((item) => (
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

 
<section className="py">
  <p2 className="centered">
    <span id="creek-harbour"> DUBAI CREEK HARBOUR </span>
  </p2>
  <Container>
      <div className="cards">
        {dubaiCreek.map((item,index) => (
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


<section className="py">
  <p2 className="centered">
    <span id="hills-estate"> DUBAI HILLS ESTATE </span>
  </p2>
  <Container>
      <div className="cards">
        {dubaiHeels.map((item,index) => (
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

export default EmaarProperties;
