'use client'
import SidenNav from "@/app/component/sidenNav";


import EducationAndExperience from "@/app/component/educationAndExperience";
import Header from "@/app/component/header";
import About from "@/app/component/about";
import Services from "@/app/component/services";
import Skills from "@/app/component/skills";
import Contact from "@/app/component/contact";

import 'aos/dist/aos.css'
// import {InitializeAos} from "@/app/component/initializeAos";
// import {useEffect} from "react";
import AOS from "aos";
import {useEffect} from "react";
import Footer from "@/app/component/footer";
import Projects from "@/app/component/projects";

export default function MyApp() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            // delay: 200,
        });
    })
    // useAOSInitializer();
    // InitializeAos()
    return (

        <main id="colorlib-page">
            <div className="container-wrap">
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
                   data-target="#navbar"
                   aria-expanded="false" aria-controls="navbar"><i/></a>

                <SidenNav/>

                <Header/>

                <main>

                    <About/>

                    <Skills/>

                    <EducationAndExperience/>

                    <Projects/>

                    <Services/>

                    <Contact/>
                </main>
                <Footer/>
                <>
                    <a
                        href="#"
                        className="back-to-top d-flex align-items-center justify-content-center"
                    >
                        <i className="bi bi-arrow-up-short"/>
                    </a>
                </>

            </div>
        </main>

    )
}
