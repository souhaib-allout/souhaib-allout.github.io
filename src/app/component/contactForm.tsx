'use client'
// import {sendEmail} from "../../lib/email";

// import sendMail from "@/app/service/mailSender";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import React, {startTransition} from "react";
import sendMail from "@/app/service/mailSender";
import postMessage from "@/app/api/postMessage";
import getMessage from "@/app/api/getMessage";


export default function ContactForm() {
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
                const result=postMessage(values,null);
                console.log(result);
                // children?.sendMail(values)
                // startTransition(() => sendMail(values))
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
                               placeholder="Message" />
                        {errors.message && touched.message ? (
                            <div className="text-danger">{errors.message}</div>
                        ) : null}

                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-send-message" >
                            Send Message
                        </button>
                    </div>
                </Form>
            )}
        </Formik>

    )
}
