import React from 'react'

const SKILLS = [
  'React', 'JavaScript', 'TypeScript', 'Angular', 'Swift',
  'Java', 'Python', 'Firebase', 'MongoDB', 'PostgreSQL',
  'Node.js', 'Git', 'CI/CD', 'Agile / Scrum',
]

const EXPERIENCE = [
  {
    title: 'Feature Lead',
    company: 'Bank of America',
    period: '2024 – Present',
  },
  {
    title: 'Application Manager',
    company: 'Bank of America',
    period: '2024 – Present',
  },
  {
    title: 'Software Engineer',
    company: 'Bank of America',
    period: '2021 – 2024',
  },
  {
    title: 'Founder & Roaster',
    company: 'RJAM Beans & Brew',
    period: '2020 – Present',
  },
]

function About() {
  return (
    <main className="about-page">

      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero__photo-wrap">
          <div className="about-hero__ring" />
          <img
            className="about-hero__photo"
            src="https://media.licdn.com/dms/image/v2/D5603AQGWwTFa1UZCFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723052974739?e=2147483647&v=beta&t=Fa3361jJtY0tbvar8efa3mfdeZ6v2FWiWWhhlXnVg-Y"
            alt="Roshan Jamkatel"
          />
        </div>

        <div className="about-hero__info">
          <h1>Roshan Jamkatel</h1>
          <div className="about-hero__roles">
            <span className="role-tag role-tag--primary">⚡ Feature Lead</span>
            <span className="role-tag role-tag--secondary">🛠 Application Manager</span>
            <span className="role-tag role-tag--company">🏦 Bank of America</span>
          </div>
          <p className="about-hero__bio">
            Tech leader driving product features and application ownership at Bank of America.
            Passionate about building scalable software, leading cross-functional teams, and
            crafting delightful user experiences. Outside of work, I roast specialty coffee
            through my small business, <strong style={{ color: 'var(--gold)' }}>RJAM Beans &amp; Brew</strong>.
          </p>
          <a className="btn-resume" href="/files/rjamkatel_resume.pdf" target="_blank" rel="noopener noreferrer">
            📄 View Resume
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        <div className="stat-card">
          <div className="stat-card__number">3+</div>
          <div className="stat-card__label">Years @ BofA</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__number">6+</div>
          <div className="stat-card__label">Projects Built</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__number">2</div>
          <div className="stat-card__label">Leadership Roles</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__number">☕</div>
          <div className="stat-card__label">Coffee Roaster</div>
        </div>
      </div>

      {/* Experience */}
      <div className="about-section">
        <h2 className="about-section__title">Experience</h2>
        <div className="experience-list">
          {EXPERIENCE.map(({ title, company, period }) => (
            <div key={title + company} className="exp-card">
              <div className="exp-card__dot" />
              <div>
                <p className="exp-card__title">{title}</p>
                <p className="exp-card__company">{company}</p>
                <p className="exp-card__period">{period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="about-section">
        <h2 className="about-section__title">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {SKILLS.map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

    </main>
  )
}

export default About

