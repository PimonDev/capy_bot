import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'La fiestica',
  description: 'Explora el verdadero sabor de Venezuela',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}