import generalData from "@/data/generalData";

export default function Header() {

    return (
        <>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay={100}>
                    <h1>Souhaib Allout</h1>
                    <p className="text-primary">
                        Java / React Software Engineer
                        {/*I&apos;m <span*/}
                        {/*    className="typed"*/}
                        {/*    data-typed-items="Java software engineer,React software engineer,Full stack software engineer"*/}
                        {/*/>*/}
                    </p>
                    <div className="social-links">
                        <a href={generalData.linkedin_link} className="linkedin" target="_blank">
                            <i className="bx bxl-linkedin" />
                        </a>
                        <a href={generalData.skype_link} target="_blank">
                            <i className="bx bxl-skype" />
                        </a>

                        <a href={generalData.github_link} target="_blank">
                            <i className="bx bxl-github" />
                        </a>
                        <a href="assets/files/souhaib_allout_resume_en.pdf" target="_blank">
                            <i className="bx bxs-file-blank" />
                        </a>

                    </div>
                </div>
            </section>
            {/* End Hero */}
        </>

    )
}
