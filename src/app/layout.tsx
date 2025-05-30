import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minh Tam Dinh | Employability Profile",
  description: "Professional portfolio and employability profile for Semester 1, 2025",
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
