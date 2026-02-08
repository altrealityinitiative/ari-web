import ProjectsCard from "./ProjectsCard";
import "./ProjectsGallery.css";
import { projectsdata } from "../data/projectsdata.js";

export default function ProjectsGallery() {
  return (
    <div className="projects-gallery">
      {projectsdata.map((project, index) => (
        <ProjectsCard
          key={index}
          name={project.name}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}
