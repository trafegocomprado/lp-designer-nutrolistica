'use client'

import { trackContact } from '@/lib/trackContact'

const CTA_LINK = 'https://pay.kiwify.com.br/9LRPR3r'

export default function HeroCta() {
  return (
    <div className="flex flex-col items-center md:items-start gap-3">
      <a
        href={CTA_LINK}
        onClick={trackContact}
        className="btn-amber w-full sm:w-auto text-center"
      >
        Quero definir minha B12 agora — R$97
      </a>
      <p
        className="font-dm text-[#1A1A2E] text-center md:text-left"
        style={{ fontSize: '13px', opacity: 0.6 }}
      >
        Acesso imediato · Garantia de 7 dias · Pagamento seguro
      </p>
    </div>
  )
}
