'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    console.log(router.asPath);

    return (
        <nav className="navbar navbar-expand-lg pt-5 bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand text-white ps-3 ms-lg-5 fw-bold" href="/">
                    Gabriel Dayot
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
                        <li className="nav-item active">
                            <Link href="/" className={`nav-link navlink ${router.asPath === '/' ? 'text-danger' : 'text-white'}`}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className={`nav-link text-white navlink ${router.asPath === '/about' ? 'text-danger' : 'text-white'}`}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projects" className={`nav-link text-white navlink ${router.asPath === '/projects' ? 'text-danger' : 'text-white'}`}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className={`nav-link text-white navlink ${router.asPath === '/contact' ? 'text-danger' : 'text-white'}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
