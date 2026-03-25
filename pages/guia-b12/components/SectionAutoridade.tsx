const credentials = [
  'Médica CRM/SP 158922',
  'Especialista em Nutrologia pela ABRAN em parceria com a Santa Casa de Misericórdia de São Paulo · RQE 131269',
  'Mais de 20 anos de experiência profissional',
  'Uma das raras Médicas Integrativas com ênfase em Plant-Based no Brasil',
  'Membro da Sociedade Brasileira dos Médicos Vegetarianos',
  'Palestrante em eventos para vegetarianos e veganos',
  'Youtuber e fundadora da Escola de Saúde Natural',
]

export default function SectionAutoridade() {
  return (
    <section id="autoridade" className="bg-[#FAFAF8] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Label */}
        <p className="badge-pill block text-center mx-auto w-fit mb-10">
          Sobre a Criadora
        </p>

        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          {/* Photo */}
          <div className="flex-shrink-0 flex flex-col items-center mb-8 md:mb-0 md:w-[280px]">
            <div
              className="rounded-full overflow-hidden flex items-center justify-center bg-[#F0F4F0]"
              style={{
                width: '200px',
                height: '200px',
                border: '3px solid #1B5E40',
              }}
            >
              {/* Placeholder for Dra. Amarantha's photo */}
              <div
                className="flex flex-col items-center justify-center text-center gap-2 w-full h-full"
                style={{ padding: '16px' }}
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
                  <path d="M6 44c0-9.941 8.059-18 18-18s18 8.059 18 18" stroke="#1B5E40" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
                <p
                  className="font-dm text-[#1B5E40] font-semibold"
                  style={{ fontSize: '10px', opacity: 0.7, lineHeight: 1.4 }}
                >
                  [FOTO DA
                  <br />
                  DRA. AMARANTHA]
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="font-playfair font-bold text-[#1A1A2E] text-2xl md:text-3xl mb-1">
              Dra. Amarantha Ribas
            </h3>
            <p
              className="font-dm text-[#1B5E40] mb-6"
              style={{ fontStyle: 'italic', fontSize: '15px' }}
            >
              Médica Nutróloga · Funcional Integrativa
              <br />
              Ênfase em Vegetarianos e Veganos
            </p>

            <p className="font-dm text-[#1A1A2E] leading-relaxed mb-6" style={{ fontSize: '15px', opacity: 0.85 }}>
              Vegana há mais de 10 anos e vegetariana há 25,
              a Dra. Amarantha não criou este guia como especialista externa ao tema.
              Ela criou como alguém que viveu — e continua vivendo —
              exatamente o que você enfrenta: a necessidade de cuidar
              da própria B12 com rigor e sem achismo.
            </p>

            {/* Credentials */}
            <ul className="flex flex-col gap-1 mb-8">
              {credentials.map((c, i) => (
                <li
                  key={i}
                  className="font-dm text-[#1A1A2E] flex items-start gap-2"
                  style={{ fontSize: '15px', lineHeight: 2.2 }}
                >
                  <span
                    className="font-bold text-[#1B5E40] flex-shrink-0"
                    style={{ lineHeight: 2.2 }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            {/* Blockquote */}
            <blockquote
              className="font-dm text-[#1A1A2E]"
              style={{
                borderLeft: '3px solid #1B5E40',
                background: '#F0F4F0',
                padding: '20px 24px',
                borderRadius: '0 8px 8px 0',
                fontStyle: 'italic',
                fontSize: '15px',
                lineHeight: 1.7,
              }}
            >
              "Com essa bagagem, você recebe um produto instantâneo,
              claro e de fonte confiável para suplementar B12 com segurança.
              Tudo em 1 hora."
              <br />
              <cite
                className="not-italic font-semibold text-[#1B5E40] block mt-2"
                style={{ fontSize: '14px' }}
              >
                — Dra. Amarantha Ribas
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
