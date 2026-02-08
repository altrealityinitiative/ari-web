import "./ProjectsCard.css";

export default function ProjectsCard({ name, description, image, link }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={name} />
      </div>
      <div className="project-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    </div>
  );
}
