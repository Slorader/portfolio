import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Léo TRUX",
  description: "Portfolio",
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
    </body>
    </html>
  );
}
