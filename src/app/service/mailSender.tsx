
import nodemailer from "nodemailer"
import {sendMailService} from "@/app/api/email";


export default  function SendMail(props: any) {



     sendMailService({
        from: props.email,
        to: "del.souhaib@gmail.com",
        subject: "Portfolio : "+props.subject,
        html: '<p>'+props.message+'</p>',
    }).then(r =>
        console.log(r)
    );

     return (
         <></>
     )
    // return res.status(200).json({message: "Email sent successfully"});
}

