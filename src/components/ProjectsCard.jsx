import "./ProjectsCard.css";

export default function ProjectsCard({ name, status, description, image, link }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={name} />
      </div>
      <div className="project-content">
        <h3>{name}</h3>
        <p className="project-status">{status}</p>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name === "Kelsey Museum of Archaeology WebAR Exhibit" && (
            <span>Demo: Coming Soon! →</span>
          )}
          {name !== "Kelsey Museum of Archaeology WebAR Exhibit" &&
            <span>Learn More →</span>
          }
        </a>
      </div>
    </div>
  );
}
