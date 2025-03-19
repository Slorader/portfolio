"use client";
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";
import Button from "@/components/ui/form/button";
import Form from "next/form";
import { useI18n } from "@/locales/client";

async function sendEmail() {
    console.log('email send');
}

export default  function Contact() {
    const t =  useI18n();
    return (
        <Form onSubmit={sendEmail} action={""}>
            <div className="flex w-full gap-2 mb-2">
                <Input id="name" type="text" name="name" label={t("contact.name")} />
                <Input id="email" type="email" name="email" label={t("contact.email")} />
            </div>
            <Textarea id="message" name="message" label={t("contact.message")} />
            <Button  id="button" name="button" label={t("contact.submit")} />
        </Form>
    );
}
