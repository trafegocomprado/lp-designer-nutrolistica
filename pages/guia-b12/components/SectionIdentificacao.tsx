'use client'

const bubbles = [
  {
    side: 'left',
    text: 'Eu sou vegetariana e cada médico fala uma dose diferente. Quem eu sigo?',
  },
  {
    side: 'right',
    text: 'Será que estou com deficiência de B12 e nem percebi nos exames?',
  },
  {
    side: 'left',
    text: 'Queria uma regra clara: quantos mcg por dia, por semana, e quando tomar.',
  },
  {
    side: 'right',
    text: 'Será que é em comprimido, gotas ou injeção? Morro de medo de errar.',
  },
  {
    side: 'left',
    text: 'Tenho medo de exagerar na dose e passar mal sem saber por quê.',
  },
]

export default function SectionIdentificacao() {
  return (
    <section id="identificacao" className="bg-[#FAFAF8] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Label */}
        <p className="badge-pill block text-center mx-auto w-fit mb-4">
          Você Já Passou Por Isso?
        </p>

        {/* H2 */}
        <h2 className="font-playfair font-bold text-[#1A1A2E] text-2xl sm:text-3xl md:text-4xl leading-snug text-center mb-12 max-w-2xl mx-auto">
          Você quer suplementar B12, mas cada fonte
          fala uma coisa diferente:
        </h2>

        {/* Bubbles layout */}
        <div className="flex flex-col gap-5 md:gap-6">
          {bubbles.map((bubble, i) => (
            <div
              key={i}
              className={`flex ${
                bubble.side === 'right'
                  ? 'justify-end md:justify-end'
                  : 'justify-start md:justify-start'
              }`}
            >
              <div
                className="speech-bubble font-dm"
                style={{
                  borderBottomLeftRadius: bubble.side === 'left' ? '4px' : '20px',
                  borderBottomRightRadius: bubble.side === 'right' ? '4px' : '20px',
                }}
              >
                {/* Quote mark */}
                <span
                  aria-hidden="true"
                  className="block font-playfair text-[#1B5E40] text-3xl leading-none mb-1"
                  style={{ opacity: 0.25 }}
                >
                  "
                </span>
                {bubble.text}
              </div>
            </div>
          ))}
        </div>

        {/* Persona placeholder */}
        <div
          className="mx-auto mt-10 rounded-2xl flex flex-col items-center justify-center text-center gap-3"
          style={{
            background: '#F0F4F0',
            border: '2px dashed #1B5E40',
            padding: '32px 24px',
            maxWidth: '320px',
            minHeight: '200px',
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="24" cy="18" r="9" stroke="#1B5E40" strokeWidth="2" fill="#D6EAD6" />
            <path d="M6 42c0-9.941 8.059-18 18-18s18 8.059 18 18" stroke="#1B5E40" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
          <p
            className="font-dm text-[#1B5E40] font-semibold"
            style={{ fontSize: '12px', opacity: 0.7, lineHeight: 1.5 }}
          >
            [PLACEHOLDER]
            <br />
            Imagem da persona
            <br />
            (mulher vegetariana/vegana,
            <br />
            expressão de dúvida/reflexão)
          </p>
        </div>

        {/* Closing paragraph */}
        <p
          className="font-dm text-center mx-auto mt-10 max-w-xl"
          style={{
            fontStyle: 'italic',
            fontSize: '17px',
            color: '#1A1A2E',
            lineHeight: 1.7,
          }}
        >
          O problema não é falta de informação.
          <br />
          É excesso de informação errada, espalhada,
          <br className="hidden sm:block" />
          sem contexto para o seu caso.
        </p>
      </div>
    </section>
  )
}
