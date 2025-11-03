import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Jaipur Tour Point | Best Jaipur Tour Packages & Guides 2024",
  description:
    "Explore Jaipur with Jaipur Tour Point! Best tour packages, guided trips & travel tips for Amer Fort, Hawa Mahal, City Palace & more. Book now!",
  keywords:
    "jaipur tour point, jaipur travel guide, jaipur tour packages, best jaipur tours, visit jaipur, hawa mahal tour, amer fort trip",
  canonical: "https://www.jaipurtourpoint.com/",
  charset: "UTF-8",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Optional (disables zooming)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#eab308" />
        <meta name="msapplication-TileColor" content="#111111" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} suppressHydrationWarning`}
      >

        {children}
      </body>
    </html>
  );
}
