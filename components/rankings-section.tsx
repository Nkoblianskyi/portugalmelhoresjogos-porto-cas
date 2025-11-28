import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"
import { Trophy } from "lucide-react"

export function RankingsSection() {
  return (
    <section id="rankings" className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="hidden md:block text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Ranking </span>
            <span className="text-gold-gradient">Oficial</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os melhores casinos online licenciados em Portugal, classificados por especialistas independentes.
          </p>
        </div>

        {/* Casino Cards */}
        <div className="space-y-6">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.rank} casino={casino} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
