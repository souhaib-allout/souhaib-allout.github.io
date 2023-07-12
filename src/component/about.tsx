'use client'

import {TypeAnimation} from 'react-type-animation';

export default function About() {

    return (
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About Us</span>
                                    <h2 className="colorlib-heading">Who Am I?</h2>
                                    <TypeAnimation
                                        sequence={[

                                            `As a highly skilled software engineer with over two years of professional experience, I have a passion for creating innovative and efficient solutions that meet the complex challenges of today\'s technological landscape. With a strong foundation in computer science and expertise in multiple programming languages, I consistently deliver robust and scalable software applications that exceed client expectations.

                                            Throughout my career, I have demonstrated proficiency in full-stack development, employing cutting-edge technologies and frameworks to build dynamic and user-friendly interfaces. I have successfully collaborated with cross-functional teams, leveraging agile methodologies to ensure timely project delivery and seamless integration.
                                            
                                            My expertise extends beyond development, as I possess a deep understanding of software architecture and design principles. This allows me to design elegant and modular systems that are easily maintainable and adaptable to future requirements. I am well-versed in implementing efficient algorithms and data structures, optimizing performance, and debugging complex issues.
                                            
                                            Furthermore, I am committed to staying updated with the latest industry trends and best practices. I actively participate in continuous learning, attending workshops and conferences, and exploring emerging technologies to enhance my skill set and deliver cutting-edge solutions.
                                            
                                            In addition to my technical skills, I am an effective communicator and a collaborative team player. I thrive in dynamic and fast-paced environments, where I can contribute my problem-solving abilities and leverage my analytical mindset to drive successful outcomes. I approach challenges with a growth mindset, always seeking opportunities to learn and improve.
                                            
                                            Overall, my portfolio showcases a diverse range of projects that highlight my ability to deliver high-quality software solutions from concept to deployment. I am excited to continue leveraging my expertise and passion for software engineering to tackle new challenges and make a significant impact in the field. ` ,

                                        ]}
                                        wrapper="p"
                                        cursor={true}
                                        speed={99}
                                        style={{ display: 'inline-block',whiteSpace: 'pre-line'}}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
