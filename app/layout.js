import { Orbitron, Oxanium } from 'next/font/google';
import "./globals.css";

export const metadata = {
  title: "Cartesyum",
  description: "Cartesyum",
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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${orbitron.variable} ${oxanium.variable} antialiased`}>{children}</body>
    </html>
  );
}
