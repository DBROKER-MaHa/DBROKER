import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { newProject } from "../data/new";
import NotFound from "../components/NotFound";

function Service() {
  const [category, setCategory] = useState(newProject);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeButton, setActiveButton] = useState("All");

  const handleBtns = (e) => {
    const word = e.target.value;
    let filteredProjects = [];

    if (word === "All") {
      filteredProjects = newProject;
      
    } else {
      filteredProjects = newProject.filter((item) => item.type === word.toLowerCase());
    }

    setCategory(filteredProjects);
    setActiveButton(word); 
  };
 

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  // Filter projects based on category and search query
  const filteredProjects = category.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

 

  return (
    <>
   <div style={{ position: 'relative', height: '30rem' }}>
  <img
    src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="background"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7))',
    }}
  />
  <div className = 'position-absolute top-50 start-50 text-black translate-middle  d-flex flex-column  p-4' style={{width:'900px'}}>
           <h2 className = 'fs-1 text-white fw-bolder text-center'>Discover Our Services</h2>
            <form classsName = 'd-flex flex-column ' >
             <div>
             <input type="text" className='search-bar w-80  border-0' onChange={handleSearch} placeholder="Search"/>
             
              </div> 
              <div className="filter d-flex
              justify-content-between">
                <button type='button' value="All"  onClick={handleBtns} className ={`btn-filter border-0 p-1 fs-4 ${activeButton === 'All'?'active':''}`}>All</button>
                <button type='button' value="Studio"  onClick={handleBtns} className={`btn-filter border-0 p-1 fs-4 ${activeButton === 'Studio'?'active':''}`}>Studio</button>
                <button  type='button' value="Appartment" onClick={handleBtns} className={`btn-filter border-0 p-1 fs-4 ${activeButton === 'Appartment'?'active':''}`}>Appartment</button>
                <button type='button' value="Office"  onClick={handleBtns} className={`btn-filter border-0 p-1 fs-4 ${activeButton === 'Office'?'active':''}`}>Office</button>
              </div>
              </form>
           </div>
</div>
<section className="container">
        {filteredProjects.length > 0 ? (
          <ProjectCard category={filteredProjects} />
        ) : (
          <NotFound />
        )}
      </section>
    </>
  )
}

export default Service
