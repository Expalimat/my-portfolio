import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) => (isActive ? 'active' : '');

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <NavLink to="/projects" className={linkClass}>Projects</NavLink>
      <NavLink to="/contact" className={linkClass}>Contact</NavLink>
    </nav>
  );
}
