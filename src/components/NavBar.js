import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { NavDropdown } from 'react-bootstrap'; // Add this line to import NavDropdown

import logo from '../assets/logo.jpg'


function NavBar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

    return (
        <>
          
          <Navbar bg="black" data-bs-theme="dark" expand = 'lg' className={`headerMain ${scroll ? "sticky" : ""}`}  style={{ height: '100px' }}>
            <Container>
              <Navbar.Brand >
                  <Link to ='/'>
                    <img src={logo} alt="" style={{width:'200px', height:"75px"}} />
                  </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav"/>
              <Navbar.Collapse id = 'navbar-nav'>
              <Nav className="ms-auto menu">
                <Link className='menu-links fs-5' to="/">Home</Link>
                <Link className='menu-links fs-5' to="/services">Service</Link>
                <NavDropdown title="About Us" className="menu-links fs-5">
                <NavDropdown.Item as={Link} to="/FAQ">FAQ</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Why_Us">Why Us?</NavDropdown.Item>
              </NavDropdown>
              <Link className='menu-links fs-5' to="/Dev">Developers</Link>

                <Link className='menu-links fs-5' to="/newProject">New Project</Link>
                <Link className='menu-links fs-5' to="/services">Contact Us</Link>
              </Nav>
              <Nav className="ms-auto">
                <button className="btn btn-1">Subscribe</button>
              </Nav>
              </Navbar.Collapse>
              
            </Container>
          </Navbar>
    
         
        </>
      );
}

export default NavBar
