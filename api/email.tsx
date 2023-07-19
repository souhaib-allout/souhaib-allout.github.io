// 'use server';

import nodemailer from "nodemailer"
// const nodemailer = require("nodemailer");

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

export const sendEmail = async (data: EmailPayload) => {
    const transporter = nodemailer.createTransport({
        ...smtpOptions
    })

    return await transporter.sendMail({
        ...data,
    })
}
