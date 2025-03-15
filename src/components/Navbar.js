import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">Iriele Moses</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/certificate">Certification</Link>
          <a href="/resume.pdf" download>Download Resume</a>
        </div>
      </div>
    </nav>
  );
}