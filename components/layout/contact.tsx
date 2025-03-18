import Form from 'next/form';
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";
import Button from "@/components/ui/form/button";
import { getI18n } from "@/locales/server";

export default async function Contact() {
    const t = await getI18n();

    return (
        <Form action="">
            <div className="flex w-full gap-2 mb-2">
                <Input id="name" type="text" name="name" label={t("contact.name")} />
                <Input id="email" type="email" name="email" label={t("contact.email")} />
            </div>
            <Textarea id="message" name="message" label={t("contact.message")} />
            <Button id="button" name="button" label={t("contact.submit")} />
        </Form>
    );
}
