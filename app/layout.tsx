import type { Metadata } from "next";
import "./globals.scss";
import Scroll from "@/components/ui/scroll";
import Footer from "@/components/layout/footer";
import React from "react";

export const metadata: Metadata = {
  title: "Léo TRUX - Portfolio",
  description: "Leo's Portfolio ",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <div className="mx-auto max-w-150 z-2 flex flex-col justify-center">
      {children}
      <Scroll/>
      <Footer/>
    </div>
    </body>
    </html>
);
}
