'use client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg pt-5 bg-transparent">
      <div className="container">
        <a className="navbar-brand text-white ps-3 ms-lg-5 fw-bold" href="/">
            Gabriel <span className="lastName">Dayot</span>
        </a>
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto pe-5 ps-3">
            <li className="nav-item">
                <a href="#home" className={`nav-link navlink ${router.pathname === '/' ? 'text-danger' : 'text-white'}`}>
                  Home
                </a>
            </li>
            <li className="nav-item">
                <a href="#about" className={`nav-link navlink ${router.pathname === '/about' ? 'text-danger' : 'text-white'}`}>
                  About
                </a>
            </li>
            <li className="nav-item">
                <a href="#projects" className={`nav-link navlink ${router.pathname === '/projects' ? 'text-danger' : 'text-white'}`}>
                  Projects
                </a>
            </li>
            <li className="nav-item">
                <a href="#contact" className={`nav-link navlink ${router.pathname === '/contact' ? 'text-danger' : 'text-white'}`}>
                  Contact
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

