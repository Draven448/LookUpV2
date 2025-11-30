import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/query-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MovieDB Explorer - Discover Your Next Favorite Movie",
  description:
    "Explore popular, top-rated, and upcoming movies. Search and discover your next favorite film with MovieDB Explorer powered by TMDB.",
  keywords: ["movies", "films", "cinema", "TMDB", "movie database", "movie discovery"],
  authors: [{ name: "MartinBulds" }],
  openGraph: {
    title: "MovieDB Explorer",
    description: "Discover your next favorite movie",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-950 text-white min-h-screen flex flex-col font-sans antialiased">
        <QueryProvider>
          <Header />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

