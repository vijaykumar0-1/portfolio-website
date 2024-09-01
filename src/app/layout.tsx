import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Headers } from "@/components/Headers";
import PageTransition from "@/components/PageTransition";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrains_Mono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by Vijay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrains_Mono.variable}>
        <Headers />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
