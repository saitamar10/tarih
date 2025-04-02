import './globals.css';
import { Inter, Merriweather } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const merriweather = Merriweather({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: 'Tarih Sitesi - Dünya Tarihi Ansiklopedisi',
  description: 'Dünya tarihindeki önemli olaylar, kişiler ve dönemler hakkında kapsamlı bilgiler sunan interaktif tarih ansiklopedisi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}