// import myCv from "../files/souhaib_allout_cv_en.pdf"

export default function MyHome() {

    return (
        <>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay={100}>
                    <h1>Souhaib Allout</h1>
                    <p>
                        I&apos;m <span
                            className="typed"
                            data-typed-items=" Java software engineer, Php software engineer, Full stack software engineer"
                        />
                    </p>
                    <div className="social-links">
                        <a href="#" className="linkedin">
                            <i className="bx bxl-linkedin" />
                        </a>
                        <a href="#" className="google-plus">
                            <i className="bx bxl-skype" />
                        </a>

                        <a href="#" className="google-plus">
                            <i className="bx bxl-github" />
                        </a>

                    </div>
                </div>
            </section>
            {/* End Hero */}
        </>

    )
}
