import { useParams } from "react-router-dom";

function User({ user }) {
  let { id } = useParams();
  const projectId = parseInt(id, 10);
  const userInfo = user.find((project) => projectId === project.id);

  return (
    <div className="container mb-6 ">
      <div className="row w-100 mt-4 ">
        <div className="col-md-2 col-sm-1 w-50">
          <div className=" position-relative">
            <figure>
              <img
                className="user-img"
                src={userInfo.src}
                alt="user profile pic"
              />
            </figure>
            <div className=" justify-end mt-60  ">
              <h2 className=" position-absolute bottom-0 start-50">{userInfo.name}</h2>
              {/* <p>{login}</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-1 w-50 text-start border-primary border-5">
          <div className="mb-4">
            <h1 className="">{userInfo.name}-<h3 className="d-inline">{userInfo.role}</h3></h1>
            <p className="fs-6 text-justify">
              <span className="fs-4">Bio</span> : {userInfo.bio}
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
