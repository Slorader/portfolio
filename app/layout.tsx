import type { Metadata } from "next";
import "./globals.scss";
import Scroll from "@/components/scroll/page";

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
    <body
    >
    {children}
    <Scroll/>
    </body>
    </html>
  );
}
