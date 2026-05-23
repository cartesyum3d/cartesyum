import { Orbitron, Oxanium } from 'next/font/google';
import "./globals.css";
import FloatingWpp from "../components/FloatingWpp";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cartesyum.com.br";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cartesyum | Impressão 3D e Modelagem — Orçamento Online",
    template: "%s | Cartesyum",
  },
  description:
    "Impressão 3D de alta qualidade, modelagem 3D personalizada e protótipos. Materiais PLA, PETG, TPU e ABS. Solicite orçamento e transforme suas ideias em realidade.",
  keywords: [
    "impressão 3D",
    "modelagem 3D",
    "protótipo",
    "impressora 3D",
    "filamento",
    "PLA",
    "PETG",
    "Bambu Lab",
    "orçamento impressão 3D",
    "Cartesyum",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Cartesyum",
    title: "Cartesyum | Impressão 3D e Modelagem — Orçamento Online",
    description:
      "Impressão 3D de alta qualidade, modelagem 3D personalizada e protótipos. Solicite orçamento e transforme suas ideias em realidade.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartesyum | Impressão 3D e Modelagem",
    description: "Impressão 3D de alta qualidade e modelagem 3D personalizada. Orçamento online.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/cartesyum-logo-bw.png',
  },
};

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
});

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-oxanium',
});

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

const metaPixelScript = PIXEL_ID
  ? `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
`.trim()
  : '';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {metaPixelScript && (
          <script
            dangerouslySetInnerHTML={{ __html: metaPixelScript }}
          />
        )}
      </head>
      <body className={`${orbitron.variable} ${oxanium.variable} antialiased`}>
        {PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
        {children}
        <FloatingWpp />
      </body>
    </html>
  );
}
