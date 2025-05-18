import educations from '../../data/educations';
import generalData from "@/data/generalData";
import experiences from "@/data/experiences";
import certificates from "@/data/certificates";


export default function EducationAndExperience() {

    return (
        <>
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>
                            {generalData.education_experience_presentation}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Professional Experience</h3>
                            {experiences.map((experience, key) =>
                                <div className="resume-item" key={key}>
                                    <h4>{experience.position}</h4>
                                    <h5>{experience.duration}</h5>
                                    <p>
                                        <em>{experience.entreprise} </em>
                                    </p>
                                    <ul>
                                        {experience.missions.map((mission: string, key2: number) =>
                                            <li key={key2}>
                                                {mission}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                            <div className="resume-item">
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">Education</h3>
                            {educations.map((education, key) =>
                                <div className="resume-item" key={key}>
                                    <h4>{education.title}</h4>
                                    <h5>{education.duration}</h5>
                                    <p>
                                        <em>{education.univ}</em>
                                    </p>
                                    <p>
                                        {education.description}
                                    </p>
                                </div>
                            )}
                            <div className="resume-item">
                            </div>
                            <h3 className="resume-title">Certificates</h3>
                            {certificates.map((certificate, key) =>
                                <div className="resume-item" key={key}>
                                    <h4>{certificate.title}</h4>
                                    <h5>{certificate.date}</h5>
                                    <p>
                                        <em>{certificate.organisme}</em>
                                    </p>
                                    <p>
                                        {certificate.description}
                                    </p>
                                </div>
                            )}
                            <div className="resume-item">
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* End Resume Section */}
        </>

    )
}
