import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rebel Alerta",
  description: "A.c.a.b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <AuthProvider>
            <Navbar /> {/* Sekarang Navbar hanya dirender di client */}
            {children}
            <Footer />
          </AuthProvider>
        </StoreProvider>
        <Toaster />
      </body>
    </html>
  );
}
