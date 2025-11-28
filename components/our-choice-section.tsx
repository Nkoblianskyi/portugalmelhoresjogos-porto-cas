import { casinos } from "@/lib/casinos"
import { CasinoCard } from "@/components/casino-card"
import { Award } from "lucide-react"

export function OurChoiceSection() {
  const topCasino = casinos[0]
  const currentYear = new Date().getFullYear()

  return (
    <section className="py-12 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-4">
            <span className="text-primary text-sm font-medium">Escolha do Editor {currentYear}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            A Nossa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">Escolha</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
            Após análise rigorosa de dezenas de casinos online, este é o nosso vencedor absoluto para jogadores
            portugueses
          </p>
        </div>

        {/* Featured Casino Card */}
        <CasinoCard casino={topCasino} index={0} />
      </div>
    </section>
  )
}
