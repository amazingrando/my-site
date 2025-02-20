import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from "@/components/layout/header";
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Randy Oest • Crafting digital experiences worthy of legend",
  description: "I set the vision, create the structure, and adapt as the story unfolds—whether that's a design system, a website, or an award-winning project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased font-base text-slate-700 space-y-8 md:space-y-16"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
