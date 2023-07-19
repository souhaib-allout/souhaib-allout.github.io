import skills from '../../data/skills';

export default function Skills(){

    return (
        <section className="colorlib-skills" data-section="skills">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 " data-aos="zoom-out-left">
                        <span className="heading-meta">My Specialty</span>
                        <h2 className="colorlib-heading " data-aos="zoom-out-right">My Skills</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 " data-aos="zoom-out-left">
                        <p>As a software engineer, I have cultivated a diverse skill set that enables me to tackle
                            a wide range of projects and deliver exceptional results. I specialize in several
                            programming languages and frameworks, including: .</p>
                    </div>
                    {skills.map( (skill,key)=>
                        <div className="col-md-6 progress-wrap " data-aos="zoom-out-left" key={key}>
                            {/*<div className="progress-wrap mt-3">*/}
                                <h3>- {skill.name}</h3>
                            {/*</div>*/}
                            {/*<div className="progress">*/}
                            {/*    <div className={"progress-bar color-"+(skill.color)} role="progressbar" aria-valuenow={parseInt(skill.percentage)} aria-valuemin={0} aria-valuemax={100} style={{width: skill.percentage+"%"}}>*/}
                            {/*        <span>{skill.percentage}%</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
