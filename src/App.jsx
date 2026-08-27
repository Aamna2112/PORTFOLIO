import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <h2 className="logo">Aamna.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

          <h1>Aamna Mushraf</h1>

          <h2>AI &amp; Data Science Student</h2>

          <p>
            I am passionate about Artificial Intelligence, Data Science,
            programming and building useful real-world projects.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/src/assets/hero.png"
            alt="Aamna"
          />
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a B.Tech student specializing in Artificial Intelligence and
          Data Science. I enjoy learning programming, data analysis,
          machine learning and developing creative technology solutions.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>My Skills</h2>

        <div className="skills-container">
          <div className="skill">Python</div>
          <div className="skill">C++</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Data Science</div>
          <div className="skill">Machine Learning</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>Student Performance Predictor</h3>
            <p>
              A machine learning project that predicts student performance
              using academic data.
            </p>
            <span>Python | Pandas | Scikit-learn</span>
          </div>

          <div className="project-card">
            <h3>Personal Portfolio</h3>
            <p>
              A responsive portfolio website created using React.
            </p>
            <span>React | JavaScript | CSS</span>
          </div>

          <div className="project-card">
            <h3>Data Analysis Project</h3>
            <p>
              A data analysis project using Python to find useful patterns
              and insights from datasets.
            </p>
            <span>Python | Pandas | Matplotlib</span>
          </div>

        </div>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>B.Tech - Artificial Intelligence &amp; Data Science</h3>
          <p>Currently pursuing my degree</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>

        <p>
          I am open to internships, projects and learning opportunities.
        </p>

        <div className="contact-info">
          <p>Email: your-email@example.com</p>
          <p>LinkedIn: Your LinkedIn Profile</p>
          <p>GitHub: Your GitHub Profile</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Aamna Mushraf. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;