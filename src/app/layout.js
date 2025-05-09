import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GPA Calculator - Calculate Your Grade Point Average Easily",
  description:
    "Use our free GPA Calculator to accurately calculate your Grade Point Average. Add courses, credits, and grades to get instant GPA results. Perfect for students and academic planning.",
  keywords: [
    "GPA Calculator",
    "Grade Point Average",
    "Calculate GPA",
    "Student GPA Tool",
    "Academic Calculator",
    "College GPA",
    "University GPA",
    "Free GPA Calculator",
  ],
  authors: [{ name: "Your Name or Organization" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://your-gpa-calculator-site.com",
  },
  openGraph: {
    title: "GPA Calculator - Calculate Your Grade Point Average",
    description:
      "Easily calculate your GPA with our free online tool. Input courses, credits, and grades to get accurate results instantly.",
    url: "https://your-gpa-calculator-site.com",
    siteName: "GPA Calculator",
    images: [
      {
        url: "https://your-gpa-calculator-site.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GPA Calculator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPA Calculator - Calculate Your GPA",
    description:
      "Instantly calculate your GPA with our free tool. Perfect for students!",
    images: ["https://your-gpa-calculator-site.com/twitter-image.jpg"],
    creator: "@YourTwitterHandle",
  },
};

// Structured data for schema.org
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "GPA Calculator",
  description:
    "A free online tool to calculate your Grade Point Average (GPA) by inputting courses, credits, and grades.",
  url: "https://your-gpa-calculator-site.com",
  applicationCategory: "Education",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "Your Organization Name",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload fonts for performance */}
        <link
          rel="preload"
          href="/fonts/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}