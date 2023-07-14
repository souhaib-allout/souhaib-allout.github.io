import certificates from '../data/certificates';


export default function Certificates() {

    return (
        <section className="colorlib-education" data-section="certificates">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                         data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Certificates</span>
                        <h2 className="colorlib-heading animate-box">Certificates</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                                {certificates.map((certificate, key) =>
                                    <div className={"panel panel-default"} key={key}>
                                        <div className="panel-heading" role="tab" id={"certif-heading" + key}>
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion2"
                                                   href={"#certif-collapse" + key}
                                                   aria-expanded="false" aria-controls={"certif-collapse" + key}
                                                   className={key != 0 ? "collapsed" : ''}>
                                                    {certificate.title} · <span>{certificate.date}</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id={"certif-collapse" + key}
                                             className={key == 0 ? "panel-collapse collapse in" : "panel-collapse collapse"}
                                             role="tabpanel"
                                             aria-labelledby={"certif-heading" + key}>
                                            <div className="panel-body">
                                                <h4>{certificate.organisme}</h4>
                                                <p>{certificate.description}</p>
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
