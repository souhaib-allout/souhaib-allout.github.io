import languages from '../data/languages';

export default function Languages() {

    return (
        <section className="colorlib-languages" data-section="languages">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                         data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading animate-box">My Languages</h2>
                    </div>
                </div>
                <div className="row">
                    {languages.map((language, key) =>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft" key={key}>
                            <div className="languages color-1">
                                <h3>{language.name} <span>{language.level}</span></h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>

    )
}
