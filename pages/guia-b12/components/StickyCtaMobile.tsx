'use client'

import { useEffect, useRef } from 'react'
import { trackContact } from '@/lib/trackContact'

const CTA_LINK = 'https://pay.kiwify.com.br/9LRPR3r'

export default function StickyCtaMobile() {
  const stickyRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    const el = stickyRef.current
    if (!el) return

    // Trigger de aparecimento: seção 5 (deliverables) — ~50% da página
    const triggerShow = document.getElementById('deliverables')
    // Trigger de ocultamento: CTA final — quando visível, esconde o sticky
    const triggerHide = document.getElementById('cta-final')

    if (!triggerShow) return

    // Observer 1 — mostra o sticky quando #deliverables entra na viewport
    const showObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transform = 'translateY(0)'
            el.style.opacity = '1'
          } else {
            // Só oculta ao sair pelo topo (scrolling up antes da seção 5)
            if (entry.boundingClientRect.top > 0) {
              el.style.transform = 'translateY(100%)'
              el.style.opacity = '0'
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observer 2 — oculta o sticky quando #cta-final fica visível
    const hideObserver = triggerHide
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.style.transform = 'translateY(100%)'
                el.style.opacity = '0'
              } else {
                // Só reexibe se já passou da seção 5 (cta-final saiu pelo fundo)
                if (entry.boundingClientRect.top > 0) return
                el.style.transform = 'translateY(0)'
                el.style.opacity = '1'
              }
            })
          },
          { threshold: 0.1 }
        )
      : null

    showObserver.observe(triggerShow)
    if (triggerHide && hideObserver) hideObserver.observe(triggerHide)

    return () => {
      showObserver.disconnect()
      hideObserver?.disconnect()
    }
  }, [])

  return (
    <a
      ref={stickyRef}
      href={CTA_LINK}
      onClick={trackContact}
      className="fixed bottom-0 left-0 right-0 z-[9999] flex items-center justify-center font-dm font-bold text-white uppercase tracking-wider md:hidden"
      style={{
        background: '#E07B00',
        height: '56px',
        fontSize: '16px',
        letterSpacing: '0.04em',
        textDecoration: 'none',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.15)',
        // Estado inicial: oculto abaixo da viewport — sem scroll event
        transform: 'translateY(100%)',
        opacity: '0',
        transition: 'transform 300ms ease, opacity 300ms ease',
      }}
      aria-label="Quero acesso — R$97"
    >
      Quero acesso — R$97
    </a>
  )
}
