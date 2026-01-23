import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "LSTM", "Computer Vision", "YOLO", "TensorFlow", "Pandas", "NumPy"]
    },
    {
      title: "Web Development",
      skills: ["React.js", "Flask", "HTML/CSS", "JavaScript", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["SQL", "PostgreSQL", "Supabase", "MySQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Docker", "Kubernetes", "Git", "Tableau", "Jupyter Notebook", "VS Code", "Maven", "Kafka"]
    },
    {
      title: "Other Skills",
      skills: ["Photography", "Videography", "Video Editing (DaVinci Resolve)", "Data Preprocessing", "Model Evaluation"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category card">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
