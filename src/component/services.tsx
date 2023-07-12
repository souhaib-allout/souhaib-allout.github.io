import services from '../data/services'

export default function Services() {

    return (
        <section className="colorlib-services" data-section="services">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-8 col-md-offset-3 col-md-pull-3 animate-box"
                         data-animate-effect="fadeInLeft"
                    >
                        <span className="heading-meta">What I do?</span>
                        <h2 className="colorlib-heading">Here are some of my expertise</h2>
                    </div>
                </div>
                <div className="row row-pt-md">
                    {/*<i className="icon-group-outline"/>*/}
                    {services.map((service, key) =>
                        <div className="col-md-4 text-center animate-box" key={key} >
                            <div className={"services color-"+(key+1)} style={{"height":"380px"}}>
                                <div className="icon ">
                                    <i className={service.class}/>
                                </div>
                                <div className="desc">
                                    <h3>{service.name}</h3>
                                    <p>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
