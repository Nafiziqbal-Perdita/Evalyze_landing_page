import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evalyze | AI IELTS Writing Coach",
  description:
    "Get instant, AI-powered feedback on IELTS Writing Tasks 1 & 2. Practice smarter and boost your band score with Evalyze.",
  openGraph: {
    title: "Evalyze | AI IELTS Writing Coach",
    description:
      "Get instant, AI-powered feedback on IELTS Writing Tasks 1 & 2. Practice smarter and boost your band score with Evalyze.",
    url: "https://play.google.com/store/apps/details?id=com.ielts.aievalyze",
    siteName: "Evalyze",
    type: "website",
    images: [
      {
        url: "/evalyze_1.png",
        width: 1200,
        height: 630,
        alt: "Evalyze logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evalyze | AI IELTS Writing Coach",
    description:
      "Get instant, AI-powered feedback on IELTS Writing Tasks 1 & 2. Practice smarter and boost your band score with Evalyze.",
    images: ["/evalyze_1.png"],
  },
  icons: {
    icon: "/evalyze_1.png",
    shortcut: "/evalyze_1.png",
    apple: "/evalyze_1.png",
  },
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
        {children}
      </body>
    </html>
  );
}
