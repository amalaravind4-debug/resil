import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.urls.siteUrl),
  title: {
    default: "Resilience Reading Room | 24/7 AC Study Cabins in Kuravankonam, Kowdiar, Trivandrum",
    template: "%s | Resilience Reading Room",
  },
  description:
    "India's first AI-integrated study space in Kuravankonam, Kowdiar, Thiruvananthapuram (PIN: 695003). 129 ergonomic cabins, real-time BookMyCabin seat map, 13 hours daily AC (8:30 AM to 9:30 PM), and optical fiber Wi-Fi from ₹800/month.",
  keywords: [
    "Resilience Reading Room",
    "Resilience Reading Room Kuravankonam",
    "reading room in Kuravankonam",
    "reading room in Kowdiar",
    "reading room in Trivandrum",
    "24 hour reading room in Thiruvananthapuram",
    "24/7 AC study space Trivandrum",
    "study cabin Kuravankonam",
    "reading library near Fortune IAS Academy",
    "reading room Pattom",
    "reading room Plammoodu",
    "reading room Kesavadasapuram",
    "reading room Ambalamukku",
    "reading room Nanthankode",
    "study center Kowdiar 695003",
    "UPSC reading room Trivandrum",
    "NEET study space Thiruvananthapuram",
    "BookMyCabin Resilience",
  ],
  authors: [{ name: "Resilience Reading Room" }],
  creator: "Resilience Reading Room",
  publisher: "Resilience Reading Room",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.urls.siteUrl,
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kuravankonam, Kowdiar, Thiruvananthapuram",
    "geo.position": "8.5231;76.9536",
    ICBM: "8.5231, 76.9536",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.urls.siteUrl,
    title: "Resilience Reading Room | Focus. Discipline. Success.",
    description:
      "India's first AI-integrated 24/7 air-conditioned study space in Kuravankonam, Kowdiar, Thiruvananthapuram. 129 ergonomic cabins with live seat availability on BookMyCabin.",
    siteName: "Resilience Reading Room",
    images: [
      {
        url: "/resil-animation/ezgif-frame-001.jpg",
        width: 1080,
        height: 1920,
        alt: "Resilience Reading Room ergonomic study cabin workstation in Kuravankonam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resilience Reading Room | 24/7 Study Space in Kuravankonam, Trivandrum",
    description:
      "129 precision-engineered study cabins, true 24/7 AC, low-latency fiber Wi-Fi, and live seat reservation via BookMyCabin from ₹800/month.",
    images: ["/resil-animation/ezgif-frame-001.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Library", "LocalBusiness", "EducationalOrganization"],
        "@id": `${siteConfig.urls.siteUrl}/#organization`,
        name: siteConfig.brand.name,
        legalName: siteConfig.brand.legalName,
        alternateName: [
          "Resilience Reading Room Kuravankonam",
          "Resilience Study Space Kowdiar",
        ],
        description: siteConfig.brand.subtagline,
        url: siteConfig.urls.siteUrl,
        logo: `${siteConfig.urls.siteUrl}/resil-animation/ezgif-frame-001.jpg`,
        image: `${siteConfig.urls.siteUrl}/resil-animation/ezgif-frame-001.jpg`,
        telephone: siteConfig.location.phone,
        email: siteConfig.location.email,
        priceRange: "₹800 - ₹1,800/month",
        currenciesAccepted: "INR",
        paymentAccepted: "UPI, Credit Card, Net Banking via BookMyCabin, Cash",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.location.streetAddress,
          addressLocality: siteConfig.location.locality,
          addressRegion: siteConfig.location.state,
          postalCode: siteConfig.location.postalCode, // 695003 strictly
          addressCountry: siteConfig.location.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.coordinates.latitude,
          longitude: siteConfig.location.coordinates.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        hasMap: siteConfig.urls.google.businessProfileUrl,
        sameAs: [
          siteConfig.urls.bookMyCabin.branchUrl,
          siteConfig.urls.google.businessProfileUrl,
          siteConfig.urls.whatsapp.chatUrl,
        ],
        areaServed: siteConfig.location.feederLocalities.map((loc) => ({
          "@type": "AdministrativeArea",
          name: `${loc}, Thiruvananthapuram`,
        })),
        amenityFeature: siteConfig.attributes.map((attr) => ({
          "@type": "LocationFeatureSpecification",
          name: attr,
          value: true,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "16",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.urls.siteUrl}/#faq`,
        mainEntity: siteConfig.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans bg-[#050505] text-white antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
