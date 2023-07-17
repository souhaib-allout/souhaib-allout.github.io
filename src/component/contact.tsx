// import {sendEmail} from "../../lib/email";

import sendMail from "@/service/mailSender";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

export default function Contact() {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        subject: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        message: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),

    });


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
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email:'',
                                        subject:'',
                                        message:''
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={values => {
                                        // same shape as initial values
                                        console.log(values);
                                        sendMail(values)
                                    }}
                                >
                                    {({errors, touched}) => (
                                        <Form>
                                            <div className="form-group">
                                                <Field type="text" name="name" className="form-control"
                                                       placeholder="Name"/>
                                                {errors.name && touched.name ? (
                                                    <div className="text-danger">{errors.name}</div>
                                                ) : null}

                                            </div>
                                            <div className="form-group">
                                                <Field type="email" name="email" className="form-control"
                                                       placeholder="Email"/>
                                                {errors.email && touched.email ? (
                                                    <div className="text-danger">{errors.email}</div>
                                                ) : null}

                                            </div>
                                            <div className="form-group">
                                                <Field type="text" name="subject" className="form-control"
                                                       placeholder="Subject"/>
                                                {errors.subject && touched.subject ? (
                                                    <div className="text-danger">{errors.subject}</div>
                                                ) : null}

                                            </div>
                                            <div className="form-group">
                                        <Field as="textarea" id="message" name="message" cols={30} rows={7}
                                                  className="form-control"
                                                  placeholder="Message" defaultValue={""}/>
                                                {errors.message && touched.message ? (
                                                    <div className="text-danger">{errors.message}</div>
                                                ) : null}

                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary btn-send-message">
                                                    Send Message
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
