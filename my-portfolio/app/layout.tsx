import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minimalist Portfolio & Admin Studio',
  description: 'Modern portfolio with hidden admin studio and live CV manager.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-black text-white antialiased selection:bg-[#59B292] selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}