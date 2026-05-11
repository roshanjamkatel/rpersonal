import React from 'react'

const PROJECTS = [
  {
    icon: '⚛️',
    overline: 'ECampus',
    title: 'Group Planning for Students',
    updated: 'Mar 2021',
    desc: 'A communication system built on Firebase and React that lets students and professionals manage project status and collaborate within organization groups.',
    tags: ['React', 'Firebase', 'JavaScript'],
    link: 'https://elastic-euclid-62f3b2.netlify.app/',
    linkLabel: 'View Live',
  },
  {
    icon: '🔺',
    overline: 'FPSToolkit',
    title: 'FPS ESport Professional Info',
    updated: 'May 2021',
    desc: 'An Angular + Firebase website displaying E-Sports information for competitive FPS gamers, built with TypeScript and TailwindCSS by a team of 3.',
    tags: ['Angular', 'Firebase', 'TypeScript', 'Tailwind'],
    link: 'https://www.fpstoolkit.tech',
    linkLabel: 'View Live',
  },
  {
    icon: '🍎',
    overline: 'Valorant Randomizer',
    title: 'Video Game Randomizer',
    updated: 'Apr 2021',
    desc: 'An iOS app (Swift) that randomizes agents, weapons, and strategies for Valorant, making custom games with friends more exciting.',
    tags: ['Swift', 'iOS', 'Valorant'],
    link: 'https://github.com/roshanjamkatel/valorantRandomizer',
    linkLabel: 'GitHub',
  },
  {
    icon: '☕',
    overline: 'GameVendorr',
    title: 'Full Stack Videogame Marketplace',
    updated: 'May 2021',
    desc: 'A full-stack web app using MongoDB and PostgreSQL serving as a video game marketplace with reviews — a minimal version of Steam, built by 3 people.',
    tags: ['Java', 'PostgreSQL', 'MongoDB'],
    link: 'https://github.com/roshanjamkatel/GameVendor',
    linkLabel: 'GitHub',
  },
  {
    icon: '💉',
    overline: 'Covid Vaccine Wallet',
    title: 'COVID Vaccination Card Holder',
    updated: 'Jun 2021',
    desc: 'An iOS app that lets users securely scan and store their COVID-19 vaccination card with built-in privacy protections.',
    tags: ['Swift', 'iOS', 'Security'],
    link: null,
    linkLabel: 'Coming Soon',
  },
  {
    icon: '🌐',
    overline: 'rjamkatel.com',
    title: 'Personal Website',
    updated: 'Jul 2021',
    desc: 'This website — a modern portfolio and link hub built with React, JavaScript, and HTML to centralize all personal info.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: null,
    linkLabel: "You're Here!",
  },
]

function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-page__header">
        <h1>Projects</h1>
        <p>A collection of things I've built over the years.</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map(({ icon, overline, title, updated, desc, tags, link, linkLabel }) => (
          <div key={title} className="proj-card">
            <div className="proj-card__header">
              <div className="proj-card__tech-badge">{icon}</div>
              <div className="proj-card__meta">
                <div className="proj-card__overline">{overline}</div>
                <div className="proj-card__updated">Updated {updated}</div>
              </div>
            </div>

            <div className="proj-card__body">
              <h3 className="proj-card__title">{title}</h3>
              <p className="proj-card__desc">{desc}</p>
            </div>

            <div className="proj-card__footer">
              <div className="proj-card__tags">
                {tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {link ? (
                <a className="btn-view" href={link} target="_blank" rel="noopener noreferrer">
                  {linkLabel} ↗
                </a>
              ) : (
                <span className="btn-view" style={{ opacity: 0.5, cursor: 'default', background: 'rgba(108,99,255,0.2)' }}>
                  {linkLabel}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Projects

