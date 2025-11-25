import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Harsha Vardhan | Software Developer & Data Engineer",
  description: "Portfolio of Harsha Vardhan - Software Developer and Data Engineer specializing in cloud, data engineering, and full-stack development. Passionate about transforming data into insights and building scalable solutions.",
  keywords: ["Harsha Vardhan", "Software Developer", "Data Engineer", "Portfolio", "Web Development", "Cloud Computing", "Machine Learning"],
  authors: [{ name: "Harsha Vardhan Yempally" }],
  openGraph: {
    title: "Harsha Vardhan | Software Developer & Data Engineer",
    description: "Portfolio showcasing expertise in data engineering, cloud computing, and full-stack development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
