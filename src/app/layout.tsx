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
  title: "AI Bug Explainer",
  description: "Fix Your Bugs in Seconds with AI-Powered Explanations",
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
