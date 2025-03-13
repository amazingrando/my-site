import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import Fathom from '@/lib/fathom';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Randy Oest • Designer & storyteller for growing brands",
  description: "I set the vision, create the structure, and adapt as the story unfolds—whether that's a design system, a website, or an award-winning project.",
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
