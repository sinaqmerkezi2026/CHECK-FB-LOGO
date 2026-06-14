import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kalkulyator - Precise & Reliable',
  description: 'A modern, high-precision arithmetic calculator app.',
  icons: {
    icon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='16' height='20' x='4' y='2' rx='2'/%3E%3Cline x1='8' y1='6' x2='16' y2='6'/%3E%3Cline x1='16' y1='14' x2='16' y2='18'/%3E%3Cline x1='16' y1='10' x2='16' y2='10'/%3E%3Cline x1='12' y1='14' x2='12' y2='18'/%3E%3Cline x1='12' y1='10' x2='12' y2='10'/%3E%3Cline x1='8' y1='14' x2='8' y2='18'/%3E%3Cline x1='8' y1='10' x2='8' y2='10'/%3E%3C/svg%3E`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
