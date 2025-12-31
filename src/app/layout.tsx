export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Mulish, Urbanist } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import MainContent from "@/components/layouts/utils/MainContent";
import WebFooter from "@/components/layouts/WebFooter";
import WebHeader from "@/components/layouts/WebHeader";
import SmoothScrollWidget from "@/components/widgets/SmoothScrollWidget";

import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const areaVariable = localFont({
  src: "../assets/fonts/fonnts.com-Area_Variable_Thin.otf",
  variable: "--font-area-variable",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sellwidely | Real Estate Developers in Kanyakumari, Tirunelveli & Nagercoil",
  description:
    "Sellwidely offers premium residential, commercial, and industrial real estate projects across Kanyakumari, Tirunelveli, and Nagercoil. Trusted for quality, innovation, and timely delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mulish.variable} ${urbanist.variable} ${areaVariable.variable} antialiased flex flex-col min-h-screen`}
      >
        <SmoothScrollWidget>
          <WebHeader />
          <MainContent>{children}</MainContent>
          <WebFooter />
        </SmoothScrollWidget>

        {/* 🔥 TOAST CONTAINER (IMPORTANT) */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: "var(--font-mulish)",
            },
          }}
        />
      </body>
    </html>
  );
}

