import ProjectsGallery from "../components/ProjectsGallery";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>Explore our innovative XR experiences and collaborations</p>
      </div>
      <ProjectsGallery />
    </div>
  );
}
