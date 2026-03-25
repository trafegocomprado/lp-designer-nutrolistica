'use client'

const bullets = [
  {
    title: 'Qual forma de B12 faz mais sentido para o seu caso —',
    detail: 'cianocobalamina ou metilcobalamina, e quando cada uma importa',
  },
  {
    title: 'Qual dose tomar — com tabela por cenário:',
    detail: 'manutenção, correção, gestantes, idosos',
  },
  {
    title: 'Com que frequência tomar — diária, semanal ou mensal —',
    detail: 'e por que a resposta depende do seu exame',
  },
  {
    title: 'Como ler o resultado do exame sem depender de interpretação médica',
    detail: 'para saber se seus níveis estão realmente adequados',
  },
  {
    title: 'Quais fatores da sua rotina afetam a absorção —',
    detail: 'e o que ajustar se você toma mas os níveis não sobem',
  },
]

export default function SectionSolucao() {
  return (
    <section id="solucao" className="bg-[#FAFAF8] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        {/* Label */}
        <p className="badge-pill block text-center mx-auto w-fit mb-4">
          A Solução
        </p>

        {/* H2 */}
        <h2 className="font-playfair font-bold text-[#1B5E40] text-2xl sm:text-3xl md:text-4xl leading-snug text-center mb-3">
          O Guia de Suplementação da B12
        </h2>

        {/* Subtitle */}
        <p
          className="font-dm text-center text-[#1A1A2E] text-lg mb-8"
          style={{ opacity: 0.7 }}
        >
          Em menos de 1 hora você vai saber:
        </p>

        {/* Bullets */}
        <ul className="flex flex-col gap-4 mb-10">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 mt-[3px] font-bold text-[#1B5E40]"
                style={{ fontSize: '20px', lineHeight: 1 }}
                aria-hidden="true"
              >
                ✓
              </span>
              <p className="font-dm text-[#1A1A2E] leading-relaxed" style={{ fontSize: '17px' }}>
                <strong>{b.title}</strong>{' '}
                {b.detail}
              </p>
            </li>
          ))}
        </ul>

        {/* Future casting block */}
        <div
          className="text-center mx-auto"
          style={{
            background: '#F0F4F0',
            padding: '32px',
            borderRadius: '12px',
            marginTop: '32px',
            maxWidth: '680px',
          }}
        >
          <p
            className="font-dm text-[#1A1A2E]"
            style={{
              fontStyle: 'italic',
              fontSize: '18px',
              lineHeight: 1.7,
            }}
          >
            "A confusão vai embora. A segurança aparece.
            <br className="hidden sm:block" />
            E dá para respirar melhor — sabendo que finalmente
            <br className="hidden sm:block" />
            está cuidando de si do jeito certo."
          </p>
        </div>
      </div>
    </section>
  )
}
