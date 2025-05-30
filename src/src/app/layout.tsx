import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Minh Tam Dinh | Professional Portfolio",
    description: "Professional portfolio and employability profile showcasing my journey, experiences, and growth.",
    viewport: "width=device-width, initial-scale=1",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full">
            <body className={`${inter.className} h-full antialiased`}>
                <div className="flex min-h-full flex-col">
                    <Navigation />
                    <main className="flex-1">{children}</main>
                </div>
            </body>
        </html>
    );
} 