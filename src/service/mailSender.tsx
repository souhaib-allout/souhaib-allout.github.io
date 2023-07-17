// 'use server';

import {sendEmail} from "../../lib/email";
import {array} from "yup";


export default async function sendMail(props: any) {
    console.log(props.email)
    await sendEmail({
        from: props.email,
        to: "del.souhaib@gmail.com",
        subject: "Portfolio : "+props.subject,
        html: '<p>'+props.message+'</p>',
    }).then(r =>
        console.log(r)
    );

    // return res.status(200).json({message: "Email sent successfully"});
}

