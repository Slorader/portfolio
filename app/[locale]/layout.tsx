import type {Metadata} from "next";
import "./globals.scss";
import Scroll from "@/components/ui/scroll";
import React, {Suspense} from "react";
import {Providers} from "@/app/[locale]/providers";
import Loading from "@/app/[locale]/loading";

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
        <Suspense fallback={<Loading />}>
            <div className="mx-auto px-6 max-w-150 z-2 flex flex-col justify-center">
                <Providers local={locale}>{children}</Providers>
                <Scroll/>
            </div>
        </Suspense>
        </body>
        </html>
    );
}
