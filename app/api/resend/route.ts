import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    const email = process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS;
    if (email) {
        try {
            const { data, error } = await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: email,
                subject: 'Hello world',
                react: "test",
            });

            if (error) {
                return Response.json({ error }, { status: 500 });
            }

            return Response.json(data);
        } catch (error) {
            return Response.json({ error }, { status: 500 });
        }
    }
}

