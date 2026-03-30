import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Johan Triana | Portafolio',
  description:
    'Portafolio de Johan Sebastian Triana Bonilla, estudiante de Ingenieria de Sistemas y desarrollador web full stack.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
