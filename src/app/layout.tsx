import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/custom/navbar";
import CustomCursor from "@/components/custom/cursor";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASIDO Foundation",
  description: "Created by Samuel Ogunleke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SidebarProvider className="flex justify-start items-center">
        <Navbar />
        <body
          className={`${geistMono.variable} w-full antialiased`}
        >
          {children}
          <CustomCursor />
        </body>
      </SidebarProvider>
    </html>
  );
}