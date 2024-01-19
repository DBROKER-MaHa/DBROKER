import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer  className="bg-black text-white ">
      <div className='container d-flex p-10 justify-content-between md:flex-column'>
        <div>
        <img src={logo} alt="" style={{width:'200px', height:"75px"}} />
        <p style={{width:'300px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores corporis, maxime excepturi blanditiis optio illo unde placeat inventore totam veniam cupiditate deleniti officiis beatae iusto sed libero quod voluptates reprehenderit? Libero, neque voluptas.</p>
        </div>
        <div>
            <p className='text-center fs-3'>Contact Info</p>
            <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
            </ul>
        </div>
        <div>
        <p className='text-center fs-3'>Quick Links</p>
        <ul>
             <li><Link className='fs-6'to="/">Home</Link></li>
             <li><Link className='fs-6' to="/about">About Us</Link></li>
             <li><Link className='fs-6' to="/services">Service</Link></li>
             <li><Link className='fs-6' to="/services">New Project</Link></li>
             <li><Link className='fs-6' to="/services">Contact Us</Link></li>
        </ul>
        </div>
        <div className='text-center fs-3'>
            <p>Socail Media</p>
            <ul className='d-flex justify-content-between'>
            <li><Link to="/"><FaFacebook/></Link></li>
             <li><Link to="/"><FaInstagram/></Link></li>
             <li><Link to="/"><FaInstagram/></Link></li>
            
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
