export default function MyHome() {

    return (
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
                <ul className="slides">
                    <li style={{backgroundImage: "url(images/img_bg_1.jpg)"}}>
                        <div className="overlay"/>
                        <div className="container-fluid">
                            <div className="row">
                                <div
                                    className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                    <div className="slider-text-inner js-fullheight">
                                        <div className="desc">
                                            <h2>Hi! <br/>I&apos;m Souhaib</h2>
                                            <p><a className="btn btn-primary btn-learn">Download CV <i
                                                className="icon-download4"/></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style={{backgroundImage: "url(images/img_bg_2.jpg)"}}>
                        <div className="overlay"/>
                        <div className="container-fluid">
                            <div className="row">
                                <div
                                    className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                    <div className="slider-text-inner">
                                        <div className="desc">
                                            <h1>I am <br/>a Software engineer</h1>
                                            <p><a href="https://www.linkedin.com/in/souhaib-allout/" target="_blank" className="btn btn-primary btn-learn">
                                                View My LinkEdin <i
                                                className="icon-linkedin2"/></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}
