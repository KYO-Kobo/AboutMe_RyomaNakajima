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
  title: "中島竜馬 | デジタル・ビジネス支援員 | 森のイノベーションラボFUJINO",
  description: "地域おこし協力隊として相模原市藤野でデジタル・ビジネス支援を行う中島竜馬のポートフォリオサイト。ウェブサイト制作、アプリ開発、たこ焼き移動販売、シェアハウス運営など多彩な活動を紹介。",
  keywords: ["中島竜馬", "地域おこし協力隊", "デジタル支援", "藤野", "相模原市", "ウェブサイト制作", "アプリ開発", "森のイノベーションラボFUJINO"],
  authors: [{ name: "中島竜馬" }],
  creator: "中島竜馬",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://aboutme-ryoma-nakajima.vercel.app/",
    siteName: "中島竜馬 ポートフォリオ",
    title: "中島竜馬 | デジタル・ビジネス支援員 | 森のイノベーションラボFUJINO",
    description: "地域おこし協力隊として相模原市藤野でデジタル・ビジネス支援を行う中島竜馬のポートフォリオサイト。ウェブサイト制作、アプリ開発、たこ焼き移動販売、シェアハウス運営など多彩な活動を紹介。",
    images: [
      {
        url: "/images/profile-new.png",
        width: 1200,
        height: 630,
        alt: "中島竜馬のプロフィール写真",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "中島竜馬 | デジタル・ビジネス支援員",
    description: "地域おこし協力隊として相模原市藤野でデジタル・ビジネス支援を行う中島竜馬のポートフォリオサイト。",
    images: ["/images/profile-new.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
