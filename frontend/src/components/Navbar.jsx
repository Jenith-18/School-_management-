import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">

      <NavLink to="/" className="logo">
        Jenith International School
      </NavLink>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <div className={`nav-content ${menuOpen ? 'open' : ''}`}>

        <div className="nav-links">

          <NavLink
            to="/"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/academics"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Academics
          </NavLink>

          <NavLink
            to="/admissions"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Admissions
          </NavLink>

          <NavLink
            to="/campus"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Campus
          </NavLink>

          <NavLink
            to="/explore"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Explore
          </NavLink>

          <NavLink
            to="/admissionForm"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Admission Form
          </NavLink>

        </div>

        <div className="nav-actions">

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'login-btn active-btn' : 'login-btn'
            }
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? 'register-btn active-btn' : 'register-btn'
            }
            onClick={() => setMenuOpen(false)}
          >
            Register
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;