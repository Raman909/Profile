function ProjectCard({ project }) {
  return (
    <article className="card fade-in">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="card-actions">
        {project.github && (
          <a className="btn" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
        )}
        {project.live && project.live !== '#' && (
          <a className="btn primary" href={project.live} target="_blank" rel="noreferrer">Live</a>
        )}
      </div>
    </article>
  );
}

window.ProjectCard = ProjectCard;


