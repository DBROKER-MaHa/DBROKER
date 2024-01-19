import ProjectCard from "../components/ProjectCard"
import Title from "../components/Title"

function NewProject() {
  return (
    <>
     <Title title = 'New Project'/>
     <section className="py-7">
        <div className="new-project d-flex align-items-center">
          
        </div>
        <ProjectCard />
      </section>
    </>
  )
}

export default NewProject
