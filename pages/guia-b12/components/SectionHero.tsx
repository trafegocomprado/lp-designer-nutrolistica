import HeroCta from './HeroCta'

export default function SectionHero() {
  return (
    <section
      id="hero"
      className="bg-[#FAFAF8] pt-14 pb-16 md:pt-20 md:pb-24"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Left — copy: order-1 em mobile (badges→H1→subheadline→CTA) */}
          <div className="flex-1 order-1 md:order-none mb-8 md:mb-0">
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
              frequência e forma certa para o seu caso.{' '}
              <br className="hidden sm:block" />
              Sem contradições, sem achismo, sem dúvida sobrando.
            </p>

            {/* CTA — Client Component isolado para não tornar o Hero inteiro 'use client' */}
            <HeroCta />
          </div>

          {/* Right — product mockup: order-2 em mobile (imagem por último)
              srcset serve 480px no mobile (~14kB) e 1200px no desktop (~70kB)
              fetchpriority=high + preload no <head> garantem LCP rápido */}
          <div className="flex-shrink-0 order-2 md:order-none md:w-[45%] flex justify-center">
            {/* picture com media queries — mobile 14kB (480px), desktop 70kB (1200px) */}
            <picture>
              {/* AVIF mobile */}
              <source media="(max-width: 768px)" type="image/avif" srcSet="/mockup-dispositivos-sm.avif" width={480} height={320} />
              {/* AVIF desktop */}
              <source media="(min-width: 769px)" type="image/avif" srcSet="/mockup-dispositivos.avif" width={1200} height={800} />
              {/* WebP mobile */}
              <source media="(max-width: 768px)" type="image/webp" srcSet="/mockup-dispositivos-sm.webp" width={480} height={320} />
              {/* WebP desktop */}
              <source media="(min-width: 769px)" type="image/webp" srcSet="/mockup-dispositivos.webp" width={1200} height={800} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mockup-dispositivos.webp"
                alt="Guia de Suplementação da B12 em computador, tablet e celular"
                width={768}
                height={512}
                className="w-full max-w-sm md:max-w-none object-contain drop-shadow-xl"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
