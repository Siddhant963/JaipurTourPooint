import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jaipur Tour Point | Best Jaipur Tour Packages & Guides 2024",
  description: "Explore Jaipur with Jaipur Tour Point! Best tour packages, guided trips & travel tips for Amer Fort, Hawa Mahal, City Palace & more. Book now!",
  keywords: "jaipur tour point, jaipur travel guide, jaipur tour packages, best jaipur tours, visit jaipur, hawa mahal tour, amer fort trip",
  canonical: "https://www.jaipurtourpoint.com/",
  charset: "UTF-8",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Optional (disables zooming)
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Head>
          <title></title>
          <meta name="description" content="Explore Jaipur with Jaipur Tour Point! Best tour packages..." />
          <meta name="description" content="Explore Jaipur with Jaipur Tour Point! � Best tour packages, guided trips & travel tips for Amer Fort, Hawa Mahal, City Palace & more. Book now!"/>  
          <meta name="keywords" content="jaipur tour point, jaipur travel guide, jaipur tour packages, best jaipur tours, visit jaipur, hawa mahal tour, amer fort trip"/>  
          <meta charset="UTF-8"/>  
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
          <link rel="icon" href="/images/favicon.png" />
          <link rel="canonical" href="https://www.jaipurtourpoint.com/" />  

        </Head>
        {children}
      </body>
    </html>
  );
}
