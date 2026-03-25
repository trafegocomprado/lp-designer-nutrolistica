'use client'

import Image from 'next/image'
import { trackContact } from '@/lib/trackContact'

const CTA_LINK = 'https://pay.kiwify.com.br/9LRPR3r'

export default function SectionHero() {
  return (
    <section
      id="hero"
      className="bg-[#FAFAF8] pt-14 pb-16 md:pt-20 md:pb-24"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Left — copy */}
          <div className="flex-1 mt-8 md:mt-0">
            {/* Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-6 justify-center md:justify-start">
              <span className="badge-pill">Para Vegetarianos e Veganos</span>
              <span
                className="badge-pill"
                style={{
                  background: '#1B5E40',
                  color: '#FFFFFF',
                }}
              >
                Criado por uma Médica Nutróloga — vegana há mais de 10 anos
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-playfair font-bold text-[#1B5E40] text-3xl sm:text-4xl lg:text-5xl leading-[1.15] mb-5 text-center md:text-left">
              Pare de adivinhar sua dose de B12.{' '}
              <span className="block mt-1">
                Em menos de 1 hora, você sabe exatamente
              </span>{' '}
              <span className="block mt-1 text-[#1A1A2E]">
                o que tomar — e pode começar ainda hoje.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-dm text-[#1A1A2E] text-base sm:text-lg leading-relaxed mb-8 opacity-80 text-center md:text-left">
              Tabelas simples, videoaulas curtas e diretas que definem dose,
              frequência e forma certa para o seu caso.
              <br className="hidden sm:block" />
              Sem contradições, sem achismo, sem dúvida sobrando.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href={CTA_LINK} onClick={trackContact} className="btn-amber w-full sm:w-auto text-center">
                Quero definir minha B12 agora — R$97
              </a>
              <p
                className="font-dm text-[#1A1A2E] text-center md:text-left"
                style={{ fontSize: '13px', opacity: 0.6 }}
              >
                Acesso imediato · Garantia de 7 dias · Pagamento seguro
              </p>
            </div>
          </div>

          {/* Right — product mockup */}
          <div className="flex-shrink-0 md:w-[45%] flex justify-center">
            <div
              className="w-full max-w-sm md:max-w-none rounded-2xl overflow-hidden"
              style={{
                background: '#F0F4F0',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #1B5E40',
                padding: '32px 24px',
                textAlign: 'center',
                gap: '12px',
              }}
            >
              {/* Placeholder — mockup do produto em dispositivos */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="4" y="12" width="36" height="28" rx="3" stroke="#1B5E40" strokeWidth="2.5" fill="#D6EAD6" />
                <rect x="8" y="16" width="28" height="20" rx="1.5" fill="#1B5E40" opacity="0.15" />
                <rect x="40" y="20" width="20" height="30" rx="3" stroke="#1B5E40" strokeWidth="2.5" fill="#D6EAD6" />
                <rect x="43" y="24" width="14" height="20" rx="1" fill="#1B5E40" opacity="0.15" />
                <rect x="14" y="42" width="12" height="2" rx="1" fill="#1B5E40" opacity="0.4" />
                <rect x="10" y="52" width="38" height="2.5" rx="1.25" fill="#1B5E40" opacity="0.3" />
              </svg>
              <p
                className="font-dm text-[#1B5E40] font-semibold"
                style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.5 }}
              >
                [PLACEHOLDER]
                <br />
                Mockup do produto em dispositivos
                <br />
                (computador + tablet + celular)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
