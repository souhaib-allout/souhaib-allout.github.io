// import {sendEmail} from "../../lib/email";

// import sendMail from "@/app/service/mailSender";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import ContactForm from "@/app/component/contactForm";
import SendMail from "@/app/service/mailSender";
import generalData from "@/data/generalData";
// import sendMail from "@/app/service/mailSender";

export default function Contact() {

    return (
        <>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="row mt-1">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>{generalData.location}</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>{generalData.email}</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>{generalData.tele}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
        </>

    )
}
