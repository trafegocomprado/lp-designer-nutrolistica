// Placeholder testimonials — to be replaced with real testimonials
const testimonials = [
  {
    initials: 'A.S.',
    name: '[PLACEHOLDER — Nome real]',
    diet: 'Vegana',
    text: '[PLACEHOLDER — Texto do depoimento real. Exemplo: "Finalmente entendi que precisava de metilcobalamina, não cianocobalamina, e o meu exame subiu em 3 meses."]',
    result: '[Resultado específico do aluno]',
    color: '#D6EAD6',
    textColor: '#1B5E40',
  },
  {
    initials: 'B.M.',
    name: '[PLACEHOLDER — Nome real]',
    diet: 'Vegetariana',
    text: '[PLACEHOLDER — Texto do depoimento real com resultado específico mencionado sobre dose, frequência ou forma de B12.]',
    result: '[Resultado específico do aluno]',
    color: '#F0E6D3',
    textColor: '#8B4A00',
  },
  {
    initials: 'C.R.',
    name: '[PLACEHOLDER — Nome real]',
    diet: 'Vegana',
    text: '[PLACEHOLDER — Texto do depoimento real. Deve incluir contexto pessoal e resultado concreto após usar o guia.]',
    result: '[Resultado específico do aluno]',
    color: '#E8E8F0',
    textColor: '#1A1A2E',
  },
]

export default function SectionProva() {
  return (
    <section id="prova-social" className="bg-[#F0F4F0] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* H2 */}
        <h2 className="font-playfair font-bold text-[#1A1A2E] text-2xl sm:text-3xl md:text-4xl text-center mb-3">
          <span className="text-[#1B5E40]">[X]</span> pessoas já definiram
          sua B12 com este guia
        </h2>
        <p
          className="font-dm text-center text-[#1A1A2E] mb-10"
          style={{ fontSize: '13px', opacity: 0.5 }}
        >
          [PLACEHOLDER — substituir X pelo número real de alunos]
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 flex flex-col gap-3"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <div
                  className="w-[60px] h-[60px] rounded-full flex-shrink-0 flex items-center justify-center font-dm font-bold text-lg"
                  style={{
                    background: t.color,
                    color: t.textColor,
                    border: '2px solid transparent',
                    outline: `2px solid ${t.color}`,
                  }}
                  aria-label={`Foto de ${t.name}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-dm font-bold text-[#1A1A2E] text-sm">{t.name}</p>
                  <p
                    className="font-dm text-[#1B5E40] text-xs"
                    style={{ opacity: 0.75 }}
                  >
                    {t.diet}
                  </p>
                </div>
              </div>

              {/* Text */}
              <p
                className="font-dm text-[#1A1A2E] leading-relaxed"
                style={{ fontSize: '14px', opacity: 0.8, fontStyle: 'italic' }}
              >
                "{t.text}"
              </p>

              {/* Result */}
              <div
                className="rounded-lg px-3 py-2 mt-auto"
                style={{ background: '#F0F4F0' }}
              >
                <p
                  className="font-dm font-semibold text-[#1B5E40]"
                  style={{ fontSize: '12px' }}
                >
                  ✓ {t.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="font-dm text-center text-[#1A1A2E] mt-8"
          style={{ fontSize: '12px', opacity: 0.4 }}
        >
          [PLACEHOLDER — substituir pelos 3 depoimentos reais com: foto + nome + tipo de dieta + texto + resultado específico]
        </p>
      </div>
    </section>
  )
}
