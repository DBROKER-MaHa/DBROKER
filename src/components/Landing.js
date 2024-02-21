
function Landing() {
 
    return (
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
      );
}

export default Landing
