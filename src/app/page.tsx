'use client'
import SidenNav from "@/app/component/sidenNav";


import Education from "@/app/component/education";
import MyHome from "@/app/component/myHome";
import About from "@/app/component/about";
import Services from "@/app/component/services";
import Skills from "@/app/component/skills";
import Experience from "@/app/component/experience";
import Work from "@/app/component/work";
import Contact from "@/app/component/contact";
import Certificates from "@/app/component/certificates";

import 'aos/dist/aos.css'
// import {InitializeAos} from "@/app/component/initializeAos";
// import {useEffect} from "react";
import AOS from "aos";
import {useEffect} from "react";

export default function MyApp() {
    useEffect(()=>{
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

                    <div id="colorlib-main">
                        <MyHome/>
                        <About/>

                        <Services/>
                        <Skills/>
                        <Education/>
                        <Experience/>
                        <Certificates/>
                        {/*<Work/>*/}
                        <Contact/>

                    </div>
                </div>
            </main>

    )
}
