import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import Fathom from '@/lib/fathom';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Randy Oest • I make the internet less ugly and more useful.",
  description: "Let’s be honest: there’s a lot of bad design out there. I turn tangled content and messy ideas into clean experiences and thoughtful strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased font-base text-slate-700`}
      >
        <Fathom />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
