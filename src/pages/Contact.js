import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Form, Card } from 'react-bootstrap'; 
import '../index.js';  
 
const ContactPage = () => { 
  return ( 
<div>
    <section className="a">
    <div className="bg-blue  text-white new-project d-flex align-items-center">
          <h2 className="container">CONTACT US</h2>
        </div>
      </section> 


    <div className="container"> 

      <div className="row"> 

        <div className="col-sm-6"> 
      <Card className="p-4 contact-card"> 
        <h5 className="mb-4">Contact Form</h5> 
        <Form> 
            <Form.Group className="mb-3 row"> 
                <Form.Label htmlFor="name" className="col-sm-3">Name</Form.Label> 
                <div className="col-sm-9">
                    <Form.Control type="text" id="name" /> 
                </div>
            </Form.Group> 
            <Form.Group className="mb-3 row"> 
                <Form.Label htmlFor="email" className="col-sm-3">Email</Form.Label> 
                <div className="col-sm-9">
                    <Form.Control type="email" id="email" /> 
                </div>
            </Form.Group> 
            <Form.Group className="mb-3 row"> 
                <Form.Label htmlFor="message" className="col-sm-3">Message</Form.Label> 
                <div className="col-sm-9">
                    <Form.Control as="textarea" id="message" rows="5" /> 
                </div>
            </Form.Group> 
            <button type="submit" className="btn btn-primary">Submit</button> 
        </Form> 
    </Card> 
</div> 



        <div className="col-sm-6"> 
          <Card className="p-4 contact-card"> 
            <h5 className="mb-4">Contact Details</h5> 
            <p>Floor 29, Marina Plaza</p> 
            <p>DUBAI MARINA</p> 
            <p>+971 52 670 0578</p> 
            <p>hello@off-planproperties.ae</p> 
          </Card> 
        </div> 


      </div> 
    </div> 
    </div>  
  ); 
}; 
 
function Contact() { 
  return ( 
    <div className="Contact"> 
      <ContactPage /> 
    </div> 
  ); 
} 
 
export default Contact;
