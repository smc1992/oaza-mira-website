import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";

const mavenPro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Oaza Mira - For those who care",
  description: "Preserving memories through digital grave care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link href="/css/premium-design.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/lenis@1.1.20/dist/lenis.css" />
        <script async src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js"></script>
      </head>
      <body className={`${mavenPro.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
