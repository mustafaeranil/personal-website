import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.REACT_APP_USER,
  description: `${process.env.REACT_APP_USER}'s Personal Website`,
  keywords: `${process.env.REACT_APP_USER}, React.js, Next.js, Javascript, Personal Website, Developer Personal Website, Front-End Personal Website`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
