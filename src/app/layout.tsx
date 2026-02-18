import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../../style/globals.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AI Code Error Fixer – Understand & Fix Programming Errors Instantly",
  description:
    "Struggling with coding errors? Our AI Code Error Fixer helps you understand, debug, and prevent programming issues instantly. Get clear explanations and actionable solutions in seconds.",
  keywords: [
    "AI code error fixer",
    "debug code with AI",
    "fix JavaScript errors",
    "AI debugging tool",
    "Next.js error solution",
    "programming error diagnosis",
  ],
  metadataBase: new URL("https://ai-bug-explainer-teal.vercel.app"),
  openGraph: {
    title: "AI Error Diagnosis Tool",
    description: "Understand, Fix, and Prevent Code Issues Instantly.",
    url: "https://ai-bug-explainer-teal.vercel.app",
    siteName: "AI Bug Explainer",
    type: "website",
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
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
