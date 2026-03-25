import SectionHero from '@/components/SectionHero'
import SectionIdentificacao from '@/components/SectionIdentificacao'
import SectionReframe from '@/components/SectionReframe'
import SectionComoFunciona from '@/components/SectionComoFunciona'
import SectionSolucao from '@/components/SectionSolucao'
import SectionDeliverables from '@/components/SectionDeliverables'
import SectionAutoridade from '@/components/SectionAutoridade'
import SectionProva from '@/components/SectionProva'
import SectionCtaIntermediario from '@/components/SectionCtaIntermediario'
import SectionFaq from '@/components/SectionFaq'
import SectionCtaFinal from '@/components/SectionCtaFinal'
import StickyCtaMobile from '@/components/StickyCtaMobile'

export default function Home() {
  return (
    <main>
      {/* Seção 1 — Hero */}
      <SectionHero />

      {/* Seção 2 — Identificação */}
      <SectionIdentificacao />

      {/* Seção 3 — Reframe */}
      <SectionReframe />

      {/* Seção 3B — Como Funciona */}
      <SectionComoFunciona />

      {/* Seção 4 — Solução */}
      <SectionSolucao />

      {/* Seção 5 — Deliverables + Value Stack */}
      <SectionDeliverables />

      {/* Seção 6 — Autoridade */}
      <SectionAutoridade />

      {/* Seção 7 — Prova Social */}
      <SectionProva />

      {/* Seção 8 — CTA Intermediário */}
      <SectionCtaIntermediario />

      {/* Seção 9 — FAQ */}
      <SectionFaq />

      {/* Seção 10 — CTA Final + Footer */}
      <SectionCtaFinal />

      {/* Global — Sticky Mobile CTA */}
      <StickyCtaMobile />
    </main>
  )
}
