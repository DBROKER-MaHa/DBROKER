import Carousel from 'react-bootstrap/Carousel';

function Landing() {
    return (
        <Carousel data-bs-theme="dark" >
          <Carousel.Item  className='position-relative'>
            <img
              className="w-100 d-block " style={{height:"650px"}}
              src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100"
              alt="First slide"
            />
           <div className = 'position-absolute top-50 start-50 text-white translate-middle' style={{width:'500px'}}>
           <h3 className = 'fs-1  fw-bolder text-center'>Unlocking the door to your dream home</h3>
              <p className='fs-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipiscing elit tellus nascetur lobortis, platea phasellus bibendum a.</p>
           </div>
            
          </Carousel.Item>
          <Carousel.Item className = 'position-relative'>
            <img
              className="img-fluid w-100 d-block" style={{height: "650px"}}
              src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100"
              alt="Second slide"
            />
            <div className = 'position-absolute top-50 start-50 text-white translate-middle' style={{width:'500px'}}>
           <h3 className = 'fs-1  fw-bolder text-center'>Unlocking the door to your dream home</h3>
              <p className='fs-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipiscing elit tellus nascetur lobortis, platea phasellus bibendum a.</p>
           </div>
          </Carousel.Item>
          <Carousel.Item className='postion-relative'>
            <img
              className="img-fluid w-100 d-block" style={{height: "650px"}}
              src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100"
              alt="Third slide"
            />
           <div className = 'position-absolute top-50 start-50 text-white translate-middle' style={{width:'500px'}}>
           <h3 className = 'fs-1  fw-bolder text-center'>Unlocking the door to your dream home</h3>
              <p className='fs-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipiscing elit tellus nascetur lobortis, platea phasellus bibendum a.</p>
           </div>
          </Carousel.Item>
        </Carousel>
      );
}

export default Landing
