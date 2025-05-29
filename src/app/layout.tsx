import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Navigator - 스마트 길찾기",
  description: "AI와 함께하는 똑똑한 네비게이션 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
