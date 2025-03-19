"use client";
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";
import Button from "@/components/ui/form/button";
import { useI18n } from "@/locales/client";
import React, {FormEvent} from "react";

export default function Contact() {
    const t =  useI18n();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        event.preventDefault();

        try {
            const formData: FormData = new FormData(event.currentTarget);
            const data = {
                'message': formData.get('message'),
                'name': formData.get('name'),
                'email': formData.get('email')
            };

            const response = await fetch("/api/resend", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log(error)
            }

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                console.error(error);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex w-full gap-2 mb-2">
                <Input id="name" type="text" name="name" label={t("contact.name")} />
                <Input id="email" type="email" name="email" label={t("contact.email")} />
            </div>
            <Textarea id="message" name="message" label={t("contact.message")} />
            <Button  id="button" name="button" label={t("contact.submit")} isLoading={isLoading} />
        </form>
    );
}
