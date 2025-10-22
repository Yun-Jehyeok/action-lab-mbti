import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "MBTI 매칭 서비스",
    description: "당신의 MBTI를 확인하고 연결해드릴게요!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}>{children}</body>
        </html>
    );
}
