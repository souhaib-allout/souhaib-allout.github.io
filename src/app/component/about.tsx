import {TypeAnimation} from 'react-type-animation';
import generalData from "@/data/generalData";
// import About from "../data/about";

export default function About() {

    return (
        <>
            {/* ======= About Section ======= */}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>
                            {generalData.resume}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>{generalData.title}</h3>
                            <p className="fst-italic">
                                {generalData.resume2}
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"/>{" "}
                                            <strong>Birthday:</strong> <span>{generalData.birthday}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"/>{" "}
                                            <strong>Website:</strong> <span>{generalData.website}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"/> <strong>Phone:</strong>{" "}
                                            <span>{generalData.tele}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"/> <strong>City:</strong>{" "}
                                            <span>{generalData.location}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"/> <strong>Age:</strong>{" "}
                                            <span>23</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"/> <strong>Degree:</strong>{" "}
                                            <span>{generalData.degree}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"/>{" "}
                                            <strong>Email:</strong> <span>{generalData.email}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"/>{" "}
                                            <strong>Cv:</strong> <span><a href="assets/files/souhaib_allout_cv_en.pdf" target="_blank">Download</a> </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*<p>*/}
                            {/*    Officiis eligendi itaque labore et dolorum mollitia officiis optio*/}
                            {/*    vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor*/}
                            {/*    incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime*/}
                            {/*    officiis quidem quia. Sed et consectetur qui quia repellendus itaque*/}
                            {/*    neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui*/}
                            {/*    repellendus omnis culpa magni laudantium dolores.*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section */}
        </>
    )
}
