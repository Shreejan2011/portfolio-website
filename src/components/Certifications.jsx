import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase",
      logo: `${import.meta.env.BASE_URL}jpmorgann.png`,
      file: `${import.meta.env.BASE_URL}certificates/jpmorgan_SE.pdf`
    },
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte Australia",
      logo: `${import.meta.env.BASE_URL}deloitte.jpg`,
      file: `${import.meta.env.BASE_URL}certificates/Deloitte_cyber.pdf`
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      logo: `${import.meta.env.BASE_URL}deloitte.jpg`,
      file: `${import.meta.env.BASE_URL}certificates/Deloitte_DataAnalytics.pdf`
    }
  ]


  const achievements = [
    {
      title: "National Level Silver Medal",
      description: "Kata - National Level Karate Championship, Mangaluru",
      icon: "🥈"
    }
  ]

  const openCertificate = (file) => {
    window.open(file, "_blank")
  }

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications & Achievements</h2>

      <div className="cert-section">
        <h3 className="subsection-title">Certifications</h3>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
              <div
                  key={index}
                  className="cert-card card"
                  onClick={() => openCertificate(cert.file)}
                  title="Click to view certificate"
              >
                <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="cert-logo"
                />

                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
                <small>Click to view</small>
              </div>
          ))}
        </div>

      </div>

      <div className="cert-section">
        <h3 className="subsection-title">Achievements</h3>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card card">
              <span className="achievement-icon">{achievement.icon}</span>
              <div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cert-section">
        <h3 className="subsection-title">Interests & Hobbies</h3>

        <div className="interests-container">
          <div className="interest-tag">🏏 Cricket</div>
          <div className="interest-tag">🎥 Videography</div>
          <div className="interest-tag">✂️ Video Editing (DaVinci Resolve)</div>
          <div className="interest-tag">🥋 Karate</div>
          <div className="interest-tag">📸 Photography</div>
          <div className="interest-tag">🇯🇵 Japanese Language</div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
