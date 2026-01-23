import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="experience-card card">
          <div className="experience-header">
            <div>
              <h3>Software Development Intern</h3>
              <h4>IHUB IT Solutions</h4>
            </div>
            <span className="experience-date">June 2025 - August 2025</span>
          </div>
          <ul className="experience-details">
            <li>Contributed to the development of "Hirelin", a resume screening and assessment platform</li>
            <li>Assisted in database schema design and backend data handling using SQL-based systems</li>
            <li>Worked on basic frontend components and application integration</li>
            <li>Collaborated with cross-functional team members, gaining exposure to real-world product development workflows and agile practices</li>
          </ul>
        </div>

        <div className="education-section">
          <h3 className="section-title">Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h4>Bachelor of Technology - AI & ML</h4>
                <p className="institution">NMAM Institute of Technology, Nitte</p>
                <p className="timeline-date">2022 - 2026</p>
                <p className="grade">CGPA: 8.86</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h4>Pre-University (PUC)</h4>
                <p className="institution">St. Aloysius College, Mangaluru</p>
                <p className="timeline-date">2020 - 2022</p>
                <p className="grade">Score: 92.80%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h4>SSLC</h4>
                <p className="institution">Holy Family School, Surathkal</p>
                <p className="timeline-date">2010 - 2020</p>
                <p className="grade">Score: 96.16%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
