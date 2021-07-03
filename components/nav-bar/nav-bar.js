import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link href="/">
                    <a className="navbar-brand">Milad E. Fahmy</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link px-lg-3 py-3 py-lg-4">
                                    Home
                                </a>
                            </Link></li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link px-lg-3 py-3 py-lg-4">About</a>
                            </Link></li>
                        <li className="nav-item">
                            <Link href="/posts/post">
                                <a className="nav-link px-lg-3 py-3 py-lg-4">Sample Post</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link px-lg-3 py-3 py-lg-4">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}