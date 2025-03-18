import type {Metadata} from "next";
import "./globals.scss";
import Scroll from "@/components/ui/scroll";
import React from "react";
import {Providers} from "@/app/[locale]/providers";

export const metadata: Metadata = {
    title: "Léo TRUX - Portfolio",
    description: "Leo's Portfolio ",
};


export default async function RootLayout({children, params}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params;
    return (

        <html lang="en">
        <body>
        <div className="mx-auto max-w-150 z-2 flex flex-col justify-center">
            <Providers local={locale}>{children}</Providers>
            <Scroll/>
        </div>
        </body>
        </html>
    );
}
