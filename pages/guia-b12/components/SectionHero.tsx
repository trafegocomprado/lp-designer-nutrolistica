import Image from 'next/image'
import HeroCta from './HeroCta'

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

            {/* CTA — Client Component isolado para não tornar o Hero inteiro 'use client' */}
            <HeroCta />
          </div>

          {/* Right — product mockup (Server Component = presente no HTML inicial = LCP descoberto imediatamente) */}
          <div className="flex-shrink-0 md:w-[45%] flex justify-center">
            <Image
              src="/mockup-dispositivos.webp"
              alt="Guia de Suplementação da B12 em computador, tablet e celular"
              width={768}
              height={512}
              className="w-full max-w-sm md:max-w-none object-contain drop-shadow-xl"
              priority
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
