import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

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
    <html lang="pt-BR">
      <head>
        {/* Preconnect — apenas Google Fonts (2 conexões, dentro do limite) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload LCP image — mobile recebe 14kB, desktop 70kB */}
        <link
          rel="preload"
          as="image"
          href="/mockup-dispositivos.webp"
          imageSrcSet="/mockup-dispositivos-sm.webp 480w, /mockup-dispositivos.webp 1200w"
          imageSizes="(max-width: 768px) 480px, 600px"
          fetchPriority="high"
        />

        {/* Meta Pixel — carrega após window load para não bloquear LCP */}
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
            window.addEventListener('load', function() {
              fbq('init', '1571028581053350');
              fbq('track', 'PageView');
            });
          `}
        </Script>
      </head>
      <body>
        {/* Noscript pixel — imediatamente após <body> conforme spec Meta */}
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
        {children}
      </body>
    </html>
  )
}
