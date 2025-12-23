import { Navbar } from "@/features/layout/components/Navbar";
import { Providers } from "@/providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/features/layout/components/Footer";
import { domAnimation, LazyMotion } from "framer-motion";
import NextTopLoader from 'nextjs-toploader';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solvera.id'),
  title: {
    default: "Solvera Indonesia",
    template: "%s | Solvera Indonesia",
  },
  description: "Perusahaan solusi teknologi informasi dan transformasi digital terpercaya di Indonesia.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        <LazyMotion features={domAnimation}>
          <Providers>
            <NextTopLoader
              color="#1E41C6"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #1E41C6,0 0 5px #1E41C6"
            />
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </LazyMotion>
      </body>
    </html>
  );
}
