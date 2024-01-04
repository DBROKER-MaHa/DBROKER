import { FaUsers} from "react-icons/fa";


function AboutUs() {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-md-4  d-flex flex-column align-items-center">
          <FaUsers />
          <h5  className="my-3">Lorem ipsum dolor sit amet consectetur.</h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident.
          </p>
        </div>
        <div className="col-md-4  d-flex flex-column  align-items-center">
          <FaUsers />
          <h5 className="my-3">Lorem ipsum dolor sit amet consectetur.</h5>
          <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident.
          </p>
        </div>
        <div className="col-md-4 d-flex flex-column  align-items-center">
          <FaUsers />
          <h5 className="my-3">Lorem ipsum dolor sit amet consectetur.</h5>
          <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
