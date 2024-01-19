import { useParams } from "react-router-dom";
import { useState } from "react";
import Title from "../components/Title";
// import { newProject } from "../data/new";

function NewProjectDetail({ newProject }) {
  let { id } = useParams();
  const projectId = parseInt(id, 10);
  const projectInfo = newProject.find((project) => projectId === project.id);

  const [currentContent, setCurrentContent] = useState("Content1");
  const [activeButton, setActiveButton] = useState("Content1");

  const handleButtonClick = (content) => {
    setCurrentContent(content);
    setActiveButton(content);
  };

  return (
    <>
    <Title title = 'Prorety Detail'/>
      <section className="container">
        <img src={projectInfo.src} alt={projectInfo.name} className="image" />
        <h3>{projectInfo.name}</h3>
        <p>{projectInfo.location}</p>
        <div>
          <div className="links">
            <button
              onClick={() => handleButtonClick("Content1")}
              className={`btn ${activeButton === "Content1" ? "active" : ""}`}
            >
              Features
            </button>
            <button
              onClick={() => handleButtonClick("Content2")}
              className={`btn ${activeButton === "Content2" ? "active" : ""}`}
            >
              Description
            </button>
          </div>

          <div className="border p-4 mt-10" style={{ height: "200px" }}>
            {currentContent === "Content1" && (
              <div>
                <ul className="info-list">
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  <li className="my-2"><span className="border px-2 mx-1"></span><span className="font-weight-bold">Estimated Price:</span>{projectInfo.price}</li>
                  
                </ul>
              </div>
            )}
            {currentContent === "Content2" && (
              <div>
                <p>{projectInfo.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewProjectDetail;
