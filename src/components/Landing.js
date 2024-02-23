import Carousel from 'react-bootstrap/Carousel';

function Landing() {
 
    return (
      <Carousel data-bs-theme="dark" >
          <Carousel.Item  className='position-relative'>
          <div className="bg-dark">
      <img
              className="w-100 d-block landing" style={{height:"750px"}}
              src="https://res.cloudinary.com/dvfszvcxa/image/upload/v1708424418/samples/ybb_gteojq.jpg"
              alt="First slide"
            />
            
           <div className = 'position-absolute top-50 start-50  translate-middle text-white' style={{width:'400px'}}>
           <h3 className = 'fs-4 fw-bolder text-center'>DBROKER Real Estate</h3>
              <p className='fs-1 text-center'>Unlocking the door to your dream home.</p>
           </div>
            
           </div> 
            
          </Carousel.Item>
          <Carousel.Item className = 'position-relative'>
          <div className="bg-dark">
      <img
              className="w-100 d-block landing" style={{height:"750px"}}
              src="https://res.cloudinary.com/dvfszvcxa/image/upload/v1708661622/Studio_apartment_dgmn1h.webp"
              alt="First slide"
            />
            
           <div className = 'position-absolute top-50 start-50  translate-middle text-white' style={{width:'400px'}}>
           <h3 className = 'fs-4 fw-bolder text-center'>DBROKER Real Estate</h3>
              <p className='fs-1 text-center'>Unlocking the door to your dream home.</p>
           </div>
            
           </div> 
          </Carousel.Item>
          <Carousel.Item className='postion-relative'>
          <div className="bg-dark">
      <img
              className="w-100 d-block landing" style={{height:"750px"}}
              src="https://res.cloudinary.com/dvfszvcxa/image/upload/v1708661564/workstations-in-empty-office-656544055-6c29cd1f744d4a70a2d42984ce64ae7d_znnthm.jpg"
              alt="First slide"
            />
            
           <div className = 'position-absolute top-50 start-50  translate-middle text-white' style={{width:'400px'}}>
           <h3 className = 'fs-4 fw-bolder text-center'>DBROKER Real Estate</h3>
              <p className='fs-1 text-center'>Unlocking the door to your dream home.</p>
           </div>
            
           </div> 
          </Carousel.Item>
        </Carousel>
      );
}

export default Landing
