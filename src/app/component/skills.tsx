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
                    <div className="d-flex justify-content-center flex-wrap skills-content gap-3 my-3" style={{fontSize: '18px', fontWeight :'bold'}}>
                        {skills.map((skill, key) =>
                            <span className="skill" key={key}>
                                {skill.name} {key != skills.length-1 && ','}
                            </span>
                        )}
                    </div>
                </div>
            </section>
            {/* End Skills Section */}
        </>
    );
}
