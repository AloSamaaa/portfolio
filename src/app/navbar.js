'use client';
import Link from 'next/link';
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
          <ul className="navbar-nav mx-auto ps-3">
            <li className="nav-item">
              <Link href="/" passHref legacyBehavior>
                <a className={`nav-link navlink ${router.pathname === '/' ? 'text-danger' : 'text-white'}`}>
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" passHref legacyBehavior>
                <a className={`nav-link navlink ${router.pathname === '/about' ? 'text-danger' : 'text-white'}`}>
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" passHref legacyBehavior>
                <a className={`nav-link navlink ${router.pathname === '/projects' ? 'text-danger' : 'text-white'}`}>
                  Projects
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" passHref legacyBehavior>
                <a className={`nav-link navlink ${router.pathname === '/contact' ? 'text-danger' : 'text-white'}`}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

