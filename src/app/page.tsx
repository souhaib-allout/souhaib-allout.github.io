import SidenNav from "../component/sidenNav";


import Education from "../component/education";
import MyHome from "../component/myHome";
import About from "../component/about";
import Services from "../component/services";
import Skills from "../component/skills";
import Experience from "../component/experience";
import Work from "../component/work";
import Contact from "../component/contact";

export default function Home() {
    return (

            <main id="colorlib-page">
                <div className="container-wrap">
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
                       data-target="#navbar"
                       aria-expanded="false" aria-controls="navbar"><i/></a>

                    <SidenNav/>

                    <div id="colorlib-main">
                        <MyHome/>
                        <About/>
                        <Services/>
                        <Skills/>
                        <Education/>
                        <Experience/>
                        <Work/>
                        <Contact/>

                    </div>
                </div>
            </main>

    )
}
