import Landing from "../components/Landing";
import ProjectCard from "../components/ProjectCard";
import AboutUs from "../components/AboutUs";
import BestDesign from "../components/BestDesign";
function Home() {
  return (
    <>
      <Landing />
      <section className="py-7">
        <div className="bg-black text-white new-project d-flex align-items-center">
          <h2 className="container">New Project</h2>
        </div>
        <ProjectCard />
      </section>
      <section className="py-7">
        <div className="bg-black text-white new-project d-flex align-items-center mb-5">
          <h2 className="container">Why Use Us</h2>
        </div>
        <AboutUs />
      </section>
      <section className="py-7">
        <div className="bg-black text-white new-project d-flex align-items-center mb-5">
          <h2 className="container">Best Design</h2>
        </div>
        <BestDesign />
      </section>
    </>
  );
}

export default Home;
