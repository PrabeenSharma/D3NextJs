import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

import BootstrapClient from "./components/layouts/appbootstrap-client";

import AOSWrapper from "./components/AOSWrapper";

import "./globals.css";

import NextTopLoader from 'nextjs-toploader';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D3",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NextTopLoader /> 
      <BootstrapClient />
      <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
