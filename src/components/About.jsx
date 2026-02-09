import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a final-year B.Tech student at <strong>NMAM Institute of Technology</strong>, 
            specializing in Artificial Intelligence and Machine Learning with a CGPA of 8.91.
          </p>
          <p>
            My passion lies in building intelligent systems that solve real-world problems. 
            I have hands-on experience in time-series forecasting, computer vision, and full-stack 
            development. I love working with cutting-edge technologies like LSTM networks, YOLO, 
            React, and Flask to create scalable AI applications.
          </p>
          <p>
            Beyond coding, I'm a <strong>National Level Silver Medalist in Karate</strong> and enjoy 
            cricket, videography, and video editing. I speak multiple languages including Japanese, 
            English, Kannada, Hindi, and Tulu.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>8.91</h3>
            <p>CGPA</p>
          </div>
          <div className="stat-card">
            <h3>2+</h3>
            <p>Major Projects</p>
          </div>
          <div className="stat-card">
            <h3>3+</h3>
            <p>Certifications</p>
          </div>
          <div className="stat-card">
            <h3>🥈</h3>
            <p>National Medal</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
