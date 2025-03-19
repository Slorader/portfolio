import {NextRequest} from "next/server";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const email = process.env.MY_EMAIL_ADDRESS;
    const dataForm = await request.json();

    if (!email) {
        return Response.json("Error with .env email");
    }

    if (!dataForm.email || !dataForm.name || !dataForm.message) {
        return Response.json("All fields are required", {status: 400});
    }

    try {
        const {data, error} = await resend.emails.send({
            from: 'PORTFOLIO <onboarding@resend.dev>',
            to: email,
            subject: dataForm.name + ' wants to send you a message !',
            react: dataForm.message,
        });

        if (error) {
            return Response.json({error}, {status: 500});
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}

