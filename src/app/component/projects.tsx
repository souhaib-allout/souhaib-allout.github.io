import projects from "@/data/projects";


export default function Projects() {

    return (
        <>
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="resume-title">Professional Projects</h3>
                            {projects.map((project, key) =>
                                <div className="resume-item" key={key}>
                                    <h4>{project.title}</h4>
                                    <h5>{project.entreprise}</h5>
                                    <p>
                                        {project.description}
                                    </p>
                                    <ul>
                                        {project.tools.map((tool, key2) =>
                                            <li key={key2}>{tool}</li>
                                        )}
                                    </ul>
                                </div>
                            )}
                            <div className="resume-item">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Resume Section */}
        </>

    )
}
