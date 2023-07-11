import skills from '/src/data/skills';

export default function Skills(){

    return (
        <section className="colorlib-skills" data-section="skills">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">My Specialty</span>
                        <h2 className="colorlib-heading animate-box">My Skills</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
                            Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed
                            her seven versalia, put her initial into the belt and made herself on the way.</p>
                    </div>
                    {skills.map( (skill,key)=>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" key={key}>
                            <div className="progress-wrap">
                                <h3>{skill.name}</h3>
                            </div>
                            <div className="progress">
                                <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                                    <span>{skill.percentage}%</span>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
