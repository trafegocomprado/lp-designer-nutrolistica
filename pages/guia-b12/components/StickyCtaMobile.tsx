'use client'

import { useEffect, useState, useRef } from 'react'
import { trackContact } from '@/lib/trackContact'

const CTA_LINK = 'https://pay.kiwify.com.br/9LRPR3r'

export default function StickyCtaMobile() {
  const [visible, setVisible] = useState(false)
  const finalCtaRef = useRef<Element | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100

      // Find the final CTA section to hide sticky when it's visible
      const finalCta = document.getElementById('cta-final')

      if (finalCta) {
        const rect = finalCta.getBoundingClientRect()
        const isFinalCtaVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isFinalCtaVisible) {
          setVisible(false)
          return
        }
      }

      setVisible(scrolledPercent >= 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href={CTA_LINK}
      onClick={trackContact}
      className="fixed bottom-0 left-0 right-0 z-[9999] flex items-center justify-center font-dm font-bold text-white uppercase tracking-wider transition-transform md:hidden"
      style={{
        background: '#E07B00',
        height: '56px',
        fontSize: '16px',
        letterSpacing: '0.04em',
        textDecoration: 'none',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.15)',
      }}
      aria-label="Quero acesso — R$97"
    >
      Quero acesso — R$97
    </a>
  )
}
