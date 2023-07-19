import experiences from '../../data/experiences';

export default function Experience() {

    return (
        <section className="colorlib-experience" data-section="experience">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 " data-aos="zoom-out-right">
                        <span className="heading-meta">Experience</span>
                        <h2 className="colorlib-heading " data-aos="zoom-out-right">Work Experience</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            {experiences.map((experience,key)=>
                                <article className="timeline-entry " data-aos="zoom-out-left" key={key}>
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
                            <article className="timeline-entry begin " data-aos="zoom-out-right" >
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
