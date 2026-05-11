import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav className="rj-navbar">
        <NavLink className="rj-navbar__brand" to="/home" onClick={close}>
          RJ
        </NavLink>

        <ul className="rj-navbar__links">
          <li><NavLink to="/home" activeClassName="active" onClick={close}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active" onClick={close}>About</NavLink></li>
          <li><NavLink to="/projects" activeClassName="active" onClick={close}>Projects</NavLink></li>
          <li><NavLink to="/links" activeClassName="active" onClick={close}>Links</NavLink></li>
        </ul>

        <button
          className={`rj-navbar__hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`rj-navbar__mobile${open ? ' open' : ''}`}>
        <NavLink to="/home" onClick={close}>🏠 Home</NavLink>
        <NavLink to="/about" onClick={close}>👤 About</NavLink>
        <NavLink to="/projects" onClick={close}>🚀 Projects</NavLink>
        <NavLink to="/links" onClick={close}>🔗 Links</NavLink>
      </div>
    </>
  )
}

export default NavBar
