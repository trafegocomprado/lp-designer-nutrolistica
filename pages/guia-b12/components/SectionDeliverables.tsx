'use client'

import { trackContact } from '@/lib/trackContact'

const CTA_LINK = 'https://pay.kiwify.com.br/9LRPR3r'

const deliverables = [
  {
    icon: '📺',
    title: 'Videoaulas curtas, práticas e objetivas',
    desc: 'Cada dúvida respondida em vídeo, com linguagem acessível e sem rodeios. Você assiste no seu tempo, no ritmo que precisar.',
    value: 'R$197',
  },
  {
    icon: '📋',
    title: 'Tabelas coloridas e fáceis de usar',
    desc: 'Dose, frequência e forma por cenário — em uma tabela que você consulta sempre que precisar, sem ter que reler tudo.',
    value: 'R$37',
  },
  {
    icon: '🎬',
    title: 'FAQ em vídeo: principais dúvidas sobre B12',
    desc: 'As perguntas que todo vegetariano e vegano tem sobre B12 — respondidas de forma direta, sem enrolação.',
    value: 'R$77',
  },
]

const bonuses = [
  {
    icon: '🎁',
    title: 'A ligação essencial entre B12 e B9',
    desc: 'Entenda por que suplementar só B12 pode não ser suficiente — e como garantir que as duas vitaminas trabalham juntas corretamente.',
    value: 'R$27',
  },
  {
    icon: '🎁',
    title: 'B12 e homocisteína: essa relação pode salvar sua vida',
    desc: 'A homocisteína elevada é um fator de risco cardiovascular silencioso. Saiba como a B12 protege você — e como saber se você está protegido.',
    value: 'R$37',
  },
  {
    icon: '🎁',
    title: 'O exame esquecido que ajuda a adequar seus níveis sem dúvidas',
    desc: 'Existe um exame que os laboratórios raramente oferecem e que confirma sua situação de B12 com muito mais precisão. Você vai conhecer ele aqui.',
    value: 'R$27',
  },
]

export default function SectionDeliverables() {
  return (
    <section id="deliverables" className="bg-[#F0F4F0] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        {/* H2 */}
        <h2 className="font-playfair font-bold text-[#1A1A2E] text-2xl sm:text-3xl md:text-4xl text-center mb-10">
          Tudo que você recebe:
        </h2>

        {/* Deliverables cards */}
        <div className="flex flex-col gap-4 mb-8">
          {deliverables.map((d, i) => (
            <div key={i} className="card-deliverable flex items-start gap-4">
              <span className="text-3xl flex-shrink-0 mt-0.5" aria-hidden="true">
                {d.icon}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-dm font-bold text-[#1B5E40] text-base leading-snug">
                    {d.title}
                  </h3>
                  <span className="font-dm font-semibold text-[#1B5E40] text-sm opacity-60 whitespace-nowrap">
                    Valor: {d.value}
                  </span>
                </div>
                <p className="font-dm text-[#1A1A2E] text-sm leading-relaxed opacity-75">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-[#1B5E40] opacity-20" />
          <span
            className="font-dm font-semibold text-[#1B5E40] uppercase tracking-widest whitespace-nowrap"
            style={{ fontSize: '13px' }}
          >
            + Bônus Exclusivos
          </span>
          <div className="flex-1 h-px bg-[#1B5E40] opacity-20" />
        </div>

        {/* Bonus cards */}
        <div className="flex flex-col gap-4 mb-12">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-lg p-5"
              style={{
                background: '#F8FBF8',
                borderLeft: '4px solid #E07B00',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5" aria-hidden="true">
                {b.icon}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-dm font-bold text-[#1A1A2E] text-base leading-snug">
                    {b.title}
                  </h3>
                  <span className="font-dm font-semibold text-[#E07B00] text-sm opacity-80 whitespace-nowrap">
                    Valor: {b.value}
                  </span>
                </div>
                <p className="font-dm text-[#1A1A2E] text-sm leading-relaxed opacity-75">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Price block */}
        <div
          className="rounded-2xl p-8 md:p-10 text-center text-white"
          style={{ background: '#1A1A2E' }}
        >
          <p className="font-dm text-white mb-3" style={{ fontSize: '16px', opacity: 0.8 }}>
            Por tudo isso, você poderia esperar pagar o valor de uma consulta particular.
          </p>

          <p
            className="font-dm text-center mb-1"
            style={{
              fontSize: '20px',
              color: '#9090A8',
              textDecoration: 'line-through',
            }}
          >
            De R$402
          </p>

          <p
            className="font-dm font-semibold uppercase tracking-widest mb-1"
            style={{ fontSize: '14px', color: '#E07B00', letterSpacing: '0.1em' }}
          >
            Por apenas
          </p>

          <p
            className="font-playfair font-bold text-center"
            style={{ fontSize: '56px', color: '#E07B00', lineHeight: 1.1 }}
          >
            R$ 97
          </p>

          <div className="flex justify-center mt-6 mb-3">
            <a
              href={CTA_LINK}
              onClick={trackContact}
              className="btn-amber w-full"
              style={{ maxWidth: '400px' }}
            >
              Quero acesso imediato
            </a>
          </div>

          <p
            className="font-dm text-white"
            style={{ fontSize: '13px', opacity: 0.6 }}
          >
            Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  )
}
