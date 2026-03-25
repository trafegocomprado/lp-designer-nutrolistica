'use client'

import { trackContact } from '@/lib/trackContact'

const CTA_LINK = 'https://pay.kiwify.com.br/9LRPR3r'

export default function SectionCtaIntermediario() {
  return (
    <section
      id="cta-intermediario"
      className="py-16 md:py-20"
      style={{ background: '#1B5E40' }}
    >
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <h2
          className="font-playfair font-bold text-white text-2xl sm:text-3xl md:text-4xl leading-snug mb-8"
        >
          Pare de adivinhar.
          <br />
          Defina sua B12 com certeza — de uma vez.
        </h2>

        <div className="flex flex-col items-center gap-3">
          <a
            href={CTA_LINK}
            onClick={trackContact}
            className="btn-amber"
            style={{ minWidth: '320px', textAlign: 'center' }}
          >
            R$97 — Quero acesso imediato
          </a>
          <p
            className="font-dm text-white"
            style={{ fontSize: '13px', opacity: 0.75 }}
          >
            Acesso em menos de 5 minutos · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  )
}
