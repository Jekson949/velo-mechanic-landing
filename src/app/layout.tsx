import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://velo-mechanic.example.com'),
  title: 'Веломеханік у Львові | Прокачка гідравліки, ТО вилки, ремонт велосипедів',
  description:
    'Професійний веломеханік у Львові: прокачка гідравлічних гальм, повне ТО повітряно-масляної вилки, ремонт та налаштування велосипедів. Швидко, якісно, з гарантією.',
  openGraph: {
    title: 'Веломеханік у Львові | Прокачка гідравліки, ТО вилки, ремонт велосипедів',
    description:
      'Професійний веломеханік: гідравлічні гальма, повітряно-масляні вилки, повний сервіс велосипеда.',
    type: 'website',
    url: 'https://velo-mechanic.example.com',
    locale: 'uk_UA'
  },
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
