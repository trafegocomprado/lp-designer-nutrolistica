'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Preciso de conhecimento prévio?',
    a: 'Não. O guia foi criado para ser simples e direto, mesmo para quem nunca leu nada técnico sobre B12. As tabelas e os vídeos guiam você do zero até a decisão final de dose e frequência.',
    defaultOpen: true,
  },
  {
    q: 'Como vou receber e acessar?',
    a: 'Assim que o pagamento for confirmado, você recebe um e-mail com o link de acesso à sua área do aluno na Kiwify. Acesso em menos de 5 minutos, no celular, tablet ou computador. Sem instalar nada.',
    defaultOpen: true,
  },
  {
    q: 'Funciona para quem é vegetariano, não vegano?',
    a: 'Sim. O guia tem tabelas específicas para diferentes cenários, incluindo ovolactovegetarianos que consomem derivados de origem animal mas ainda podem ter absorção insuficiente de B12.',
    defaultOpen: false,
  },
  {
    q: 'E se meu exame estiver normal? Ainda preciso do guia?',
    a: 'Essa é exatamente uma das questões que o guia resolve. O valor de referência dos laboratórios e o valor funcional de B12 são diferentes — e entender essa diferença pode mudar completamente sua decisão de suplementar e a dose que você escolhe.',
    defaultOpen: false,
  },
  {
    q: 'O acesso expira?',
    a: 'Não. O acesso é vitalício assim que você finalizar a compra.',
    defaultOpen: false,
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. 7 dias. Se o guia não resolver suas dúvidas sobre B12, devolvemos 100% do valor. Sem perguntas e sem burocracia. Basta enviar um e-mail.',
    defaultOpen: false,
  },
]

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="border-b border-[#1B5E40] border-opacity-15 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="font-dm font-semibold text-[#1A1A2E] text-base leading-snug group-hover:text-[#1B5E40] transition-colors">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#1B5E40] flex items-center justify-center text-[#1B5E40] font-bold transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            fontSize: '18px',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Animated answer */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '400px' : '0px',
          transition: 'max-height 300ms ease',
        }}
      >
        <p
          className="font-dm text-[#1A1A2E] pb-5 leading-relaxed"
          style={{ fontSize: '15px', opacity: 0.8 }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

export default function SectionFaq() {
  const [openStates, setOpenStates] = useState<boolean[]>(
    faqs.map((f) => f.defaultOpen)
  )

  const toggle = (i: number) => {
    setOpenStates((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  return (
    <section id="faq" className="bg-[#FAFAF8] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* H2 */}
        <h2 className="font-playfair font-bold text-[#1A1A2E] text-2xl sm:text-3xl md:text-4xl text-center mb-10">
          Perguntas frequentes
        </h2>

        {/* Accordion */}
        <div
          className="bg-white rounded-2xl px-5 md:px-8"
          style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openStates[i]}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
