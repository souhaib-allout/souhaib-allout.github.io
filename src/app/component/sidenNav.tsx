

export default function SidenNav(){
    return (
        <>
            {/* ======= Mobile nav toggle button ======= */}
            {/* <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> */}
            <i className="bi bi-list mobile-nav-toggle d-lg-none" />
            {/* ======= Header ======= */}
            <header id="header" className="d-flex flex-column justify-content-center">
                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <li>
                            <a href="#hero" className="nav-link scrollto active">
                                <i className="bx bx-home" /> <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link scrollto">
                                <i className="bx bx-user" /> <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#resume" className="nav-link scrollto">
                                <i className="bx bx-file-blank" /> <span>Resume</span>
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="#portfolio" className="nav-link scrollto">*/}
                        {/*        <i className="bx bx-book-content" /> <span>Portfolio</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li>
                            <a href="#services" className="nav-link scrollto">
                                <i className="bx bx-server" /> <span>Services</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link scrollto">
                                <i className="bx bx-envelope" /> <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* .nav-menu */}
            </header>
            {/* End Header */}
        </>
    )
}
