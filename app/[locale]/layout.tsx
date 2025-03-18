import type { Metadata } from "next";
import "./globals.scss";
import Scroll from "@/components/ui/scroll";
import React from "react";
import {Providers} from "@/app/[locale]/providers";

export const metadata: Metadata = {
  title: "Léo TRUX - Portfolio",
  description: "Leo's Portfolio ",
};


export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  }
}>) {
  return (
    <html lang="en">
    <body>
    <div className="mx-auto max-w-150 z-2 flex flex-col justify-center">
      <Providers local={params.locale}>{children}</Providers>
      <Scroll/>
    </div>
    </body>
    </html>
);
}
