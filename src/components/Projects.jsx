import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Smart Solar Forecasting Dashboard",
      description: "LSTM-based time-series forecasting model to predict solar irradiance parameters (GHI, DNI, DHI) for renewable energy optimization.",
      technologies: ["Python", "LSTM", "TensorFlow", "React.js", "Flask", "Data Preprocessing"],
      features: [
        "Real-time predictions with interactive charts",
        "Battery State-of-Charge (SOC) logic",
        "Smart charging insights for clean energy",
        "Scalable for smart city deployment"
      ],
      github: "https://github.com/Shreejan2011"
    },
    {
      title: "Real-Time Pothole Detection & Mapping System",
      description: "Computer vision system using YOLO for real-time pothole detection from road images and video streams.",
      technologies: ["Python", "YOLO", "Computer Vision", "OpenCV", "GPS Integration", "Satellite Maps"],
      features: [
        "Real-time pothole detection using YOLO",
        "GPS data integration for location tracking",
        "Map-based visualization with satellite imagery",
        "Structured data logging for analytics"
      ],
      status: "Ongoing",
      github: "https://github.com/Shreejan2011"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card card">
            {project.status && <span className="project-status">{project.status}</span>}
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <ul className="project-features">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
