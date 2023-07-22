import skills from '../../data/skills';
import generalData from "@/data/generalData";

export default function Skills() {

    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>
                            {generalData.skills_presentation}
                        </p>
                    </div>
                    <div className="row skills-content">
                        {skills.map((skill, key) =>
                            <div className="col-lg-6" key={key}>
                                <div className="progress">
                                    <p className="skill">
                                        {skill.name}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* End Skills Section */}
        </>
    );
}
