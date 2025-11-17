import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WIL Store - 관리자 대시보드",
  description: "WIL Store 상품 관리 시스템",
  icons: {
    icon: [
      { url: "/favicon/Favico_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/Favico_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/Favico_192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/Favico_180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
