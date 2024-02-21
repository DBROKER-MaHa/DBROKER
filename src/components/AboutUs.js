import { FaHandPointRight } from "react-icons/fa";
import { BiLockOpen } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
// Unbiased advice based on your requirements.
// 100% Free Service/ NO commission
function AboutUs() {
  return (
    <div className="container mb-4 ">
      <div className="row  d-flex justify-content-center">
        <div className="col-md-4 col-width  d-flex align-items-center  flex-column ">
        <div className="about-iconContainer d-flex align-items-center justify-content-center ">
        <img src="https://res.cloudinary.com/dvfszvcxa/image/upload/v1708435454/samples/lo_mfnzu3.jpg" className="about-icon" alt="" />
        </div>
          <h5 className="my-3">Exclusive Access and Insights</h5>
          <ul>
            <li>
              <FaHandPointRight /><span className="about-list">Access to full range of off-plan properties from ALL major
              developers.</span>
            </li>
            <li> <FaHandPointRight /><span className="about-list">Early Access to Development stock, pre-public launch.</span></li>
          </ul>
        </div>
        <div className="col-md-4 col-width  d-flex align-items-center flex-column ">
        <div className="about-iconContainer d-flex align-items-center justify-content-center ">
        <img src="https://res.cloudinary.com/dvfszvcxa/image/upload/v1708435233/samples/service-market-studies-icon-outline-style-vector-web-design-isolated-white-background-217290045_lmwqve.jpg" className="about-icon" alt="" /></div>
          <h5 className="my-3 fs-4">Expert Market Knowledge and Services</h5>
          <ul>
            <li><FaHandPointRight /><span className="about-list">Top Market knowledge and a thoroughly professional service.</span></li>
            <li><FaHandPointRight /><span className="about-list">ROI Reports and Projections.</span></li>
            <li><FaHandPointRight /><span className="about-list">Market Reports including latest sold prices.</span></li>
          </ul>
        </div>
        <div className="col-md-4 col-width "> 
        <div className="col-md-4 col-width  d-flex align-items-center  flex-column ">
        <div className="about-iconContainer d-flex align-items-center justify-content-center ">
        <img src="https://res.cloudinary.com/dvfszvcxa/image/upload/v1708435277/samples/customerIcon_rkjyse.png" className="about-icon" alt="" />
        </div>
          <h5 className="my-3">Client-Centric Approach and Benefits</h5>
          <ul>
            <li><FaHandPointRight /><span className="about-list">Unbiased advice based on your requirements.</span></li>
            <li><FaHandPointRight /><span className="about-list">100% Free Service/ NO commission</span></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
export default AboutUs;
