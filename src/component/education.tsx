import educations from '../data/educations';


export default function Education() {

    return (
        <section className="colorlib-education" data-section="education">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                         data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Education</span>
                        <h2 className="colorlib-heading animate-box">Education</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                {educations.map((education, key) =>
                                    <div className={"panel panel-default"} key={key}>
                                        <div className="panel-heading" role="tab" id={"heading" + key}>
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href={"#collapse" + key}
                                                   aria-expanded="false" aria-controls={"collapse" + key}
                                                   className={key != 0 ? "collapsed" : ''}>
                                                    {education.title}
                                                </a>
                                            </h4>
                                        </div>
                                        <div id={"collapse" + key}
                                             className={key == 0 ? "panel-collapse collapse in" : "panel-collapse collapse"}
                                             role="tabpanel"
                                             aria-labelledby={"heading" + key}>
                                            <div className="panel-body">
                                                <h4>{education.univ}</h4>
                                                <p>{education.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
