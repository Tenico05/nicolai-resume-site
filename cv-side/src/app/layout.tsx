import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DrawerAppBar from "@/components/appBar";
import Footer from '@/components/footer'

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
    <html lang="en" style={{ height: '100%' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}
      >
        <DrawerAppBar />
        <div className="animated-background" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <main style={{ marginTop: "64px", flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
