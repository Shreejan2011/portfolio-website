import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-text">
          I'm currently seeking opportunities in AI/ML and software development. 
          Whether you have a question, an opportunity, or just want to connect, feel free to reach out!
        </p>
        <div className="contact-methods">
          <a href="mailto:shreejanshetty8@gmail.com" className="contact-card card">
            <span className="contact-icon">📧</span>
            <h3>Email</h3>
            <p>shreejanshetty8@gmail.com</p>
          </a>
          <a href="tel:+917204203392" className="contact-card card">
            <span className="contact-icon">📱</span>
            <h3>Phone</h3>
            <p>+91 7204203392</p>
          </a>
          <a href="https://linkedin.com/in/shreejan-shetty-620a79291/" target="_blank" rel="noopener noreferrer" className="contact-card card">
            <span className="contact-icon">💼</span>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/shreejan-shetty</p>
          </a>
          <a href="https://github.com/Shreejan2011" target="_blank" rel="noopener noreferrer" className="contact-card card">
            <span className="contact-icon">💻</span>
            <h3>GitHub</h3>
            <p>github.com/Shreejan2011</p>
          </a>
        </div>
        <div className="location-info">
          <span className="location-icon"></span>
          <p>Mangalore, Karnataka, India</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
