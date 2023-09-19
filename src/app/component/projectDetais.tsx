// import {sendEmail} from "../../lib/email";

// import sendMail from "@/app/service/mailSender";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import ContactForm from "@/app/component/contactForm";
import SendMail from "@/app/service/mailSender";
import generalData from "@/data/generalData";
// import sendMail from "@/app/service/mailSender";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

export default function ProjectDetais(props: any) {

    return (
        <section id="portfolio-details" className="portfolio-details">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="portfolio-details-slider ">
                            <Carousel data-bs-theme="dark">
                                <Carousel.Item>
                                    <Image src="/assets/img/portfolio/portfolio-details-1.jpg" alt='img' width={500}
                                           height={500}
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/assets/img/portfolio/portfolio-details-1.jpg" alt='img' width={500}
                                           height={500}
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/assets/img/portfolio/portfolio-details-1.jpg" alt='img' width={500}
                                           height={500}
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/assets/img/portfolio/portfolio-details-1.jpg" alt='img' width={500}
                                           height={500}
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Image src="/assets/img/portfolio/portfolio-details-1.jpg" alt='img' width={500}
                                           height={500}
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/assets/img/portfolio/portfolio-details-1.jpg" alt='img' width={500}
                                           height={500}
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/assets/img/portfolio/portfolio-details-1.jpg" alt='img' width={500}
                                           height={500}
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/assets/img/portfolio/portfolio-details-1.jpg" alt='img' width={500}
                                           height={500}
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Project information</h3>
                            <ul>
                                <li>
                                    <strong>Title</strong>: {props.project.title}
                                </li>
                                <li>
                                    <strong>Technologies</strong>: {props.project.technologies}
                                </li>
                                <li>
                                    <strong>Architecture</strong>: {props.project.architecture}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="portfolio-description">
                            <h2 className="mb-5">{props.project.title}</h2>
                            <p>
                                {props.project.presentation}
                            </p>

                            <ul>
                                    {props.project.tasks?.map((task: string, key: number) =>
                                        <li key={key}>{task}</li>
                                    )}
                                </ul>
                            <p>
                                {props.project.conclusion}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
