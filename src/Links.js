import React from 'react'

const LINKS = [
  {
    icon: '🐙',
    label: 'GitHub',
    sub: 'roshanjamkatel',
    href: 'http://www.github.com/roshanjamkatel',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    sub: 'rjamkatel',
    href: 'https://www.linkedin.com/in/rjamkatel',
  },
  {
    icon: '📸',
    label: 'Instagram',
    sub: '@r.jamkatel',
    href: 'http://www.instagram.com/r.jamkatel',
  },
  {
    icon: '📷',
    label: 'Photography',
    sub: '@rjamkatelphotography',
    href: 'http://www.instagram.com/rjamkatelphotography',
  },
  {
    icon: '🎮',
    label: 'Twitch',
    sub: 'calatlasbb',
    href: 'http://www.twitch.tv/calatlasbb',
  },
  {
    icon: '🎵',
    label: 'TikTok',
    sub: '@roshanjamkatel',
    href: 'https://www.tiktok.com/@roshanjamkatel',
  },
  {
    icon: '✍️',
    label: 'Blog',
    sub: 'blog.rjamkatel.com',
    href: 'https://blog.rjamkatel.com/',
  },
  {
    icon: '☕',
    label: 'RJAM Beans & Brew',
    sub: 'Coffee Roasting Business',
    href: '/coffee',
  },
]

function Links() {
  return (
    <main className="hero">
      <div className="hero__avatar-wrapper">
        <div className="hero__avatar-ring" />
        <img
          className="hero__avatar"
          src="https://media.licdn.com/dms/image/v2/D5603AQGWwTFa1UZCFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723052974739?e=2147483647&v=beta&t=Fa3361jJtY0tbvar8efa3mfdeZ6v2FWiWWhhlXnVg-Y"
          alt="Roshan Jamkatel"
        />
      </div>

      <h1 className="hero__name">Roshan Jamkatel</h1>

      <div className="hero__roles">
        <span className="hero__role-badge">Feature Lead</span>
        <span className="hero__role-badge">Application Manager</span>
      </div>

      <p className="hero__company">
        @ <strong>Bank of America</strong>
      </p>

      <div className="hero__links">
        {LINKS.map(({ icon, label, sub, href }) => (
          <a
            key={label}
            className="hero__link-btn"
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <span className="link-icon">{icon}</span>
            <span className="link-label">
              <span style={{ display: 'block' }}>{label}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>{sub}</span>
            </span>
            <span className="link-arrow">›</span>
          </a>
        ))}
      </div>
    </main>
  )
}

export default Links

