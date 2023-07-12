import experiences from '../data/experiences';

export default function Experience() {

    return (
        <section className="colorlib-experience" data-section="experience">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                         data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Experience</span>
                        <h2 className="colorlib-heading animate-box">Work Experience</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            {experiences.map((experience,key)=>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft" key={key}>
                                    <div className="timeline-entry-inner">
                                        <div className={"timeline-icon color-"+(key+1)}>
                                            <i className="icon-pen2"/>
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="#">{experience.position}</a> <span>{experience.duration}</span></h2>
                                            <h3>{experience.entreprise} <span>{experience.mode}</span></h3>
                                            <p style={{"display": "inline-block","whiteSpace":"pre-line"}}>
                                                {experience.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            )}
                            <article className="timeline-entry begin animate-box fadeInUp animated"
                                     data-animate-effect="fadeInBottom">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-none">
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
