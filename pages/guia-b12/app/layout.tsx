import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Guia de Suplementação da B12 para Vegetarianos e Veganos | Nutrolística',
  description:
    'Tabelas simples, videoaulas curtas e diretas que definem dose, frequência e forma certa de B12 para o seu caso. Criado pela Dra. Amarantha Ribas, Médica Nutróloga vegana há 10 anos.',
  keywords: [
    'vitamina B12',
    'suplementação B12',
    'vegetarianos',
    'veganos',
    'dose B12',
    'deficiência B12',
    'nutrologia',
    'Dra. Amarantha Ribas',
    'Nutrolística',
  ],
  openGraph: {
    title: 'Guia de Suplementação da B12 | Nutrolística',
    description:
      'Pare de adivinhar sua dose de B12. Em menos de 1 hora, você sabe exatamente o que tomar.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        {/* Meta Pixel — Dataset ID 1571028581053350 */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1571028581053350');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1571028581053350&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
