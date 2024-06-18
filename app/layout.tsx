import "./globals.css";

import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { ModalProvider } from "@/providers/modal-provider";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={font.className} suppressHydrationWarning>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
