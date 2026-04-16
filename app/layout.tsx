import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/app/components/UI/SiteChrome";
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mokuasia.com"),
  title: {
    default: "Moku Kreativ Asia",
    template: "%s | Moku Kreativ Asia",
  },
  description:
    "Moku Kreativ Asia membantu perusahaan menyusun annual report, sustainability report, assurance, dan komunikasi korporat yang strategis.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Moku Kreativ Asia",
    url: "https://mokuasia.com",
    title: "Moku Kreativ Asia",
    description:
      "Moku Kreativ Asia membantu perusahaan menyusun annual report, sustainability report, assurance, dan komunikasi korporat yang strategis.",
    images: [
      {
        url: "/images/beach-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Moku Kreativ Asia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moku Kreativ Asia",
    description:
      "Moku Kreativ Asia membantu perusahaan menyusun annual report, sustainability report, assurance, dan komunikasi korporat yang strategis.",
    images: ["/images/beach-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/moku_icon.png",
    shortcut: "/images/moku_icon.png",
    apple: "/images/moku_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className={`${figtree.className} min-h-full flex flex-col bg-white text-black overflow-x-hidden`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
