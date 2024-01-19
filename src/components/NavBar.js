import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import logo from '../assets/logo.jpg'


function NavBar() {
    return (
        <>
          
          <Navbar bg="black" data-bs-theme="dark" expand = 'lg' className='shadow bg-black'  style={{ height: '80px' }}>
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
                <Link className='menu-links fs-5' to="/about">About Us</Link>
                <Link className='menu-links fs-5' to="/services">Service</Link>
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
