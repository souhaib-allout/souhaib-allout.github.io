'use server';

import {array} from "yup";
import nodemailer from "nodemailer";


export default async function sendMail(props: any) {

    type EmailPayload = {
        from: string,
        to: string
        subject: string
        html: string
    }

// Replace with your SMTP credentials
    const smtpOptions = {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT || '2525') ,
        secure: false,
        auth: {
            user: process.env.MAIL_USERNAME  ,
            pass: process.env.MAIL_PASSWORD  ,
        },
    }

     const sendEmail = async (data: EmailPayload) => {
        const transporter = nodemailer.createTransport({
            ...smtpOptions
        })

        return await transporter.sendMail({
            ...data,
        })
    }


    console.log(props.email)
    sendEmail({
        from: props.email,
        to: "del.souhaib@gmail.com",
        subject: "Portfolio : "+props.subject,
        html: '<p>'+props.message+'</p>',
    }).then(r =>
        console.log(r)
    );

    // return res.status(200).json({message: "Email sent successfully"});
}

