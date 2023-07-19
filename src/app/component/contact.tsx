// import {sendEmail} from "../../lib/email";

// import sendMail from "@/app/service/mailSender";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import ContactForm from "@/app/component/contactForm";
import SendMail from "@/app/service/mailSender";
// import sendMail from "@/app/service/mailSender";

export default function Contact() {

    return (
        <section className="colorlib-contact" data-section="contact">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 " data-aos="zoom-out-right">
                        <span className="heading-meta">Get in Touch</span>
                        <h2 className="colorlib-heading">Contact</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="colorlib-feature colorlib-feature-sm " data-aos="zoom-out-left">
                            <div className="colorlib-icon">
                                <i className="icon-globe-outline"/>
                            </div>
                            <div className="colorlib-text">
                                <p><a href="#">del.souhaib@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="colorlib-feature colorlib-feature-sm " data-aos="zoom-out-left">
                            <div className="colorlib-icon">
                                <i className="icon-map"/>
                            </div>
                            <div className="colorlib-text">
                                <p><a>Marrakech ,Morocco</a></p>
                            </div>
                        </div>
                        <div className="colorlib-feature colorlib-feature-sm " data-aos="zoom-out-right">
                            <div className="colorlib-icon">
                                <i className="icon-phone"/>
                            </div>
                            <div className="colorlib-text">
                                <p><a href="tel://">+2127 71705545</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-push-1">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 col-md-pull-1" data-aos="zoom-out-left">
                                <ContactForm/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
