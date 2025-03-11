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
    <head>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
    </head>
    <body
    >
    {children}
    </body>
    </html>
  );
}
