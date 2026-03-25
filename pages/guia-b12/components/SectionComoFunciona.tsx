'use client'

import Image from 'next/image'

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

          {/* Mockup */}
          <div className="flex-shrink-0 md:w-[42%] flex justify-center">
            <picture>
              <source srcSet="/mockup-dispositivos.avif" type="image/avif" />
              <source srcSet="/mockup-dispositivos.webp" type="image/webp" />
              <Image
                src="/mockup-dispositivos.webp"
                alt="Guia de Suplementação da B12 em computador, tablet e celular"
                width={768}
                height={512}
                className="w-full max-w-sm md:max-w-none object-contain drop-shadow-xl"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
