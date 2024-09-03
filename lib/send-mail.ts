"use server";

import { IEmail } from "@/app/db";
import nodemailer from "nodemailer";

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: true,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export async function sendMail({from,to,subject,body}: IEmail) {

    try{
        const testResult = await transporter.verify();
        console.log(testResult);
    }
    catch(e){
        console.log((e as Error));
        return ;
    }

    try{
        const sendResult = transporter.sendMail({
            from: from ?? SMTP_SERVER_USERNAME,
            to: to ?? SMTP_SERVER_USERNAME,
            subject: subject ?? 'Nextjs send email.',
            html: body ?? 'Test send email.'
        });
        console.log(sendResult);
    }
    catch(e){
        console.log((e as Error));
    }

}
