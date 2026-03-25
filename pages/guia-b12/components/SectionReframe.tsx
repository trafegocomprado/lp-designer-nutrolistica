const cards = [
  {
    num: '01',
    title: 'As recomendações misturam situações diferentes',
    text: 'Dose de manutenção e dose de correção são completamente diferentes. Quando um post usa uma como regra geral para a outra, você decide errado sem perceber.',
  },
  {
    num: '02',
    title: 'Os rótulos usam unidades que você não aprendeu a comparar',
    text: 'mcg, UI, cianocobalamina, metilcobalamina, hidroxicobalamina — sem uma tabela de referência, você está no escuro na farmácia.',
  },
  {
    num: '03',
    title: 'Sua absorção é diferente da do post',
    text: 'Idade, acidez estomacal, uso de metformina ou omeprazol — tudo muda o quanto você realmente aproveita do que toma. A dose certa para alguém pode ser errada para você.',
  },
  {
    num: '04',
    title: 'O exame pode enganar',
    text: 'A B12 sérica pode aparecer dentro da faixa normal do laboratório mesmo com deficiência funcional. Saber interpretar é tão importante quanto fazer o exame.',
  },
]

export default function SectionReframe() {
  return (
    <section id="reframe" className="bg-[#F0F4F0] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Label */}
        <p className="badge-pill block text-center mx-auto w-fit mb-4">
          Por que isso acontece
        </p>

        {/* H2 */}
        <h2 className="font-playfair font-bold text-[#1A1A2E] text-2xl sm:text-3xl md:text-4xl leading-snug text-center mb-12 max-w-2xl mx-auto">
          A B12 confunde porque ninguém explica
          para o seu cenário
        </h2>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <span
                className="block font-playfair font-bold text-[#D6EAD6] leading-none mb-3 select-none"
                style={{ fontSize: '48px' }}
                aria-hidden="true"
              >
                {card.num}
              </span>
              <h3 className="font-playfair font-bold text-[#1B5E40] text-lg mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="font-dm text-[#1A1A2E] text-[15px] leading-relaxed opacity-80">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className="font-dm font-bold text-center mt-12 text-[#1A1A2E]"
          style={{ fontSize: '17px' }}
        >
          Não é sua culpa estar confuso.
          <br />
          Mas dá para resolver — de uma vez.
        </p>
      </div>
    </section>
  )
}
