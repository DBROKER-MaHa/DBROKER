import { useParams } from "react-router-dom";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function User({ user }) {
  let { id } = useParams();
  const projectId = parseInt(id, 10);
  const userInfo = user.find((project) => projectId === project.id);

  return (
    <div className="container m-6 w-50 ">
      <div className="d-flex flex-column mt-6 card user-container">
          <div className="d-flex  bg-black justify-content-around">
              <img
                className="user-img w-50  "
                src={userInfo.src}
                alt="user profile pic"
              />
            <div className="d-flex flex-column justify-content-around">
            <h1 className="text-white text-center">{userInfo.name}-<h3 className="d-inline">{userInfo.role}</h3></h1>
            <div className="user-contact d-flex justify-content-around">
              <FaInstagram className="text-white"/>
              <FaTwitter className="text-white"/>
              <FaWhatsapp className="text-white"/>
            </div>
            </div>
          
          
        </div>
        <div className="user-bio text-start">
         
           
            <p className="fs-6 m-7 text-justify">
              {userInfo.bio}
              
            </p>
         
        </div>
      </div>
    </div>
  );
}

export default User;
