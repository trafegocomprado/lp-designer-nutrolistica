'use client'

const steps = [
  {
    num: '1',
    title: 'Abra o Guia de B12 no seu dispositivo',
    desc: 'No celular, tablet ou computador. Acesso completo em minutos, sem instalar nada.',
  },
  {
    num: '2',
    title: 'Assista as videoaulas e use as tabelas',
    desc: 'Cada dúvida respondida em vídeo e em tabela colorida para a sua situação específica. Pronto para aplicar ainda hoje.',
  },
  {
    num: '3',
    title: 'Use a dose indicada e acompanhe sua evolução',
    desc: 'Você entende exatamente o que tomar e por que tomar. Suplementa com segurança e sem erro.',
  },
]

export default function SectionComoFunciona() {
  return (
    <section id="como-funciona" className="bg-[#FFFFFF] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Label */}
        <p className="badge-pill block text-center mx-auto w-fit mb-4">
          O Método
        </p>

        {/* H2 */}
        <h2 className="font-playfair font-bold text-[#1A1A2E] text-2xl sm:text-3xl md:text-4xl leading-snug text-center mb-12">
          Funciona em 3 passos simples:
        </h2>

        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          {/* Steps */}
          <div className="flex-1 flex flex-col gap-8 mb-10 md:mb-0">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                {/* Circle number */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-dm font-bold text-white text-lg"
                  style={{ background: '#1B5E40' }}
                  aria-label={`Passo ${step.num}`}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-[#1B5E40] text-lg mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-dm text-[#1A1A2E] text-[15px] leading-relaxed opacity-80">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mockup placeholder */}
          <div className="flex-shrink-0 md:w-[42%] flex justify-center">
            <div
              className="w-full rounded-2xl flex flex-col items-center justify-center text-center gap-3"
              style={{
                background: '#F0F4F0',
                border: '2px dashed #1B5E40',
                padding: '36px 24px',
                minHeight: '220px',
              }}
            >
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
                style={{ fontSize: '12px', opacity: 0.7, lineHeight: 1.5 }}
              >
                [PLACEHOLDER]
                <br />
                Mockup do produto em dispositivos
                <br />
                (computador + tablet + celular,
                <br />
                mostrando a interface do guia)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
