import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pooja Lathkar — People Leader",
  description:
    "What looks like a people problem is almost always a design problem. Pooja Lathkar is an AI-native people leader with 15+ years across education, social impact, fintech, and deep-tech.",
  openGraph: {
    title: "Pooja Lathkar — People Leader",
    description:
      "What looks like a people problem is almost always a design problem.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
