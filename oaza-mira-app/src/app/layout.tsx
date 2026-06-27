import type { Metadata } from "next";
import { Maven_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const mavenPro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Oaza Mira - For those who care",
  description: "Preserving memories through digital grave care",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Oaza Mira - For those who care",
    description: "Preserving memories through digital grave care",
    url: "https://oaza-mira.netlify.app",
    siteName: "Oaza Mira",
    images: [
      {
        url: "https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/6906d3bb08528d671068fa19_6904cb3aded0cc0731c92eb3_Oaza_Mira_Logo_Dove_Claim_ms_fv.png",
        width: 1200,
        height: 630,
        alt: "Oaza Mira Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaza Mira - For those who care",
    description: "Preserving memories through digital grave care",
    images: ["https://cdn.prod.website-files.com/68f6455245cd7f64e0fca6cf/6906d3bb08528d671068fa19_6904cb3aded0cc0731c92eb3_Oaza_Mira_Logo_Dove_Claim_ms_fv.png"],
  },
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
      <body className={`${mavenPro.variable} ${cormorantGaramond.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

