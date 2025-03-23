"use client";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";
import Button from "@/components/ui/form/button";
import {useScopedI18n} from "@/locales/client";
import {RiErrorWarningLine} from "react-icons/ri";
import React, {useEffect, useState} from "react";



export default function Contact() {
    const t = useScopedI18n('form');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const formSchema = z.object({
        name: z.string().min(3, {
            message: t("message.name"),
        }),
        email: z.string().email({
            message: t("message.email"),
        }),
        message: z.string().min(1, {
            message: t("message.message"),
        }),
    });

    type FormSchema = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const onSubmit = async (data: FormSchema) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/resend", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            });

            if (response.ok) {
                reset();
            } else {
                setError("erreur lors de l'envoi");
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                console.error(error);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const subscription = watch((value) => console.log("Valeurs du formulaire (contact) :", value));
        return () => subscription.unsubscribe();
    }, [watch]);


    return (
        <>
            <form className="relative" onSubmit={handleSubmit(onSubmit)}>
                {error && (
                    <div className="absolute z-2 -top-8 flex w-full items-center">
                        <RiErrorWarningLine className="mr-2 text-red-500" size={25}/>
                        <span className="text-red-500 mt-1">{error}</span>
                    </div>
                )}
                <div className="flex w-full gap-2">
                    <div className="flex flex-col w-1/2 mb-2">
                        <Input id="name" type="text" {...register("name")} label={t("fields.name")} isError={!!errors.name}/>
                        <span className={` ${errors.name ? "opacity-100" : "opacity-0" } text-[var(--form-error)] text-xs mb-1 mt-1 h-2`}>{errors.name?.message}</span>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <Input id="email" type="text" {...register("email")} label={t("fields.email")} isError={!!errors.email}/>
                        <span className={` ${errors.email ? "opacity-100" : "opacity-0" } text-[var(--form-error)] text-xs mb-1 mt-1 h-2`}>{errors.email?.message}</span>
                    </div>
                </div>
                <Textarea id="message" {...register("message")} label={t("fields.message")} isError={!!errors.message}/>
                <span className={` ${errors.message ? "opacity-100" : "opacity-0" } text-[var(--form-error)] text-xs mb-1  absolute mt-1 h-2`}>{errors.message?.message}</span>
                <Button id="button" name="button" label={t("fields.submit")} isLoading={isLoading}/>
            </form>
        </>
    );
}
