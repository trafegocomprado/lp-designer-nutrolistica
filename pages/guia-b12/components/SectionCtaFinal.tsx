'use client'

import { trackContact } from '@/lib/trackContact'

const CTA_LINK = 'https://pay.kiwify.com.br/9LRPR3r'

// Payment logos as simple SVG text badges
const paymentMethods = ['Pix', 'Visa', 'Mastercard', 'Elo', 'Kiwify']

function ShieldIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M28 6L8 14v14c0 12.15 8.4 23.52 20 26.4C39.6 51.52 48 40.15 48 28V14L28 6Z"
        stroke="#1B5E40"
        strokeWidth="2.5"
        fill="#D6EAD6"
      />
      <path
        d="M20 28l5.5 5.5 10.5-11"
        stroke="#1B5E40"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function SectionCtaFinal() {
  return (
    <>
      {/* Section 10 */}
      <section id="cta-final" className="bg-[#FAFAF8] py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          {/* Shield */}
          <div className="flex justify-center mb-3">
            <ShieldIcon />
          </div>

          <p
            className="font-dm font-bold text-[#1B5E40] mb-2"
            style={{ fontSize: '18px' }}
          >
            Garantia de 7 dias
          </p>

          <p
            className="font-dm text-[#1A1A2E] mb-12"
            style={{ fontSize: '14px', opacity: 0.65 }}
          >
            Se o guia não resolver suas dúvidas sobre B12,
            devolvemos 100% do valor. Sem perguntas.
          </p>

          {/* Spacer line */}
          <div className="mb-10" />

          {/* H2 */}
          <h2 className="font-playfair font-bold text-[#1A1A2E] text-2xl sm:text-3xl md:text-4xl mb-3">
            Defina sua B12 agora.
          </h2>

          <p
            className="font-dm text-[#1A1A2E] mb-8"
            style={{ fontStyle: 'italic', fontSize: '18px', opacity: 0.7 }}
          >
            Sem dúvida. Sem chute. Com certeza.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <a
              href={CTA_LINK}
              onClick={trackContact}
              className="btn-amber w-full"
              style={{ maxWidth: '480px', textAlign: 'center' }}
            >
              Quero acesso imediato — R$97
            </a>
            <p
              className="font-dm text-[#1A1A2E]"
              style={{ fontSize: '13px', opacity: 0.55 }}
            >
              Acesso em menos de 5 minutos · Pagamento 100% seguro
            </p>
          </div>

          {/* Payment logos */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="font-dm font-semibold rounded px-3 py-1"
                style={{
                  fontSize: '12px',
                  background: '#E8E8E8',
                  color: '#666',
                  filter: 'grayscale(1)',
                  opacity: 0.55,
                  height: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  letterSpacing: '0.03em',
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-6 text-center"
        style={{ background: '#F0F4F0' }}
      >
        <p
          className="font-dm text-[#1A1A2E]"
          style={{ fontSize: '12px', opacity: 0.4 }}
        >
          © Nutrolística — Todos os direitos reservados
        </p>
      </footer>
    </>
  )
}
