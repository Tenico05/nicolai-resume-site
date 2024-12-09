import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DrawerAppBar from "@/components/appBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "N.M Resume",
  description: "Digital resume for Nicolai Medbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DrawerAppBar />
        <main style={{ marginTop: "64px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
