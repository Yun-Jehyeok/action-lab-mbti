import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "다람쥐 도토리 매칭 🐿️🌰",
    description:
        "당신은 어떤 다람쥐인가요? 도토리 성격 분석으로 딱 맞는 숲 친구를 찾아드려요! 🌳✨",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body
                className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}
            >
                {children}
            </body>
        </html>
    );
}
