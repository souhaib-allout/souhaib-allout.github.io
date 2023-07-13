

export default function SidenNav(){
    return (

        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">

            <div className="text-center">
                <div className="author-img" style={{backgroundImage: "url(images/about.jpg)"}} />
                <h1 id="colorlib-logo"><a href="index.html">Souhaib ALLOUT</a></h1>
                <span className="position">Software Engineer</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                    <ul>
                        <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                        <li><a href="#" data-nav-section="about">About</a></li>
                        <li><a href="#" data-nav-section="services">Services</a></li>
                        <li><a href="#" data-nav-section="skills">Skills</a></li>
                        <li><a href="#" data-nav-section="education">Education</a></li>
                        <li><a href="#" data-nav-section="experience">Experience</a></li>
                        <li><a href="#" data-nav-section="work">Work</a></li>
                        <li><a href="#" data-nav-section="blog">Blog</a></li>
                        <li><a href="#" data-nav-section="contact">Contact</a></li>
                    </ul>
                </div>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/souhaib-allout/" target="_blank"><i className="icon icon-social-linkedin" style={{'fontSize':'30px'}}/></a>
                        <a href="https://github.com/souhaib-allout" target="_blank"><i className="icon icon-social-github" style={{'fontSize':'30px'}}/></a>
                    </li>

                </ul>

            </nav>

        </aside>
    )
}
