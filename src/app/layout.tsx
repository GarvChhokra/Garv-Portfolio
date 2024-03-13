import type { Metadata } from 'next'
import { Figtree } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garv Chhokra",
  description: "Portfolio",
};

const GTM_ID = "GTM-M56RFK7C"; // Replace with your GTM container ID
const GA_ID = "G-62J6BNY48F"; // Replace with your GA tracking ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
          `,
        }} />
      </Head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
