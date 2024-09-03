import { IEmail } from "@/app/db";
import { sendMail } from "@/lib/send-mail";
const nodemailer = require("nodemailer");

export async function POST(request: Request) {

    const req = (await request.json() as IEmail);

    const res = await sendMail(req);

    return Response.json({ status:'ok', message: '/api/email/post', data: res })

}