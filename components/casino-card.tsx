"use client"

import { Star, ExternalLink, Crown, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"
import Link from "next/link"

interface CasinoCardProps {
  casino: Casino
  index: number
}

const badges = [
  { text: "MELHOR ESCOLHA", icon: Crown },
  { text: "RECOMENDADO", icon: Award },
  { text: "POPULAR", icon: Star },
  { text: "CONFIÁVEL", icon: Shield },
  { text: "TESTADO", icon: Shield },
]

export function CasinoCard({ casino, index }: CasinoCardProps) {
  const renderStars = (rating: number) => {
    const starRating = rating / 2

    return (
      <div className="flex items-center justify-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          const fillPercentage = Math.min(Math.max((starRating - i) * 100, 0), 100)

          return (
            <div key={i} className="relative h-4 w-4">
              <Star
                className="absolute inset-0 h-4 w-4 text-primary/30 stroke-primary/30 fill-transparent"
                strokeWidth={2}
              />
              {fillPercentage > 0 && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
                >
                  <Star className="h-4 w-4 fill-primary text-primary stroke-primary" strokeWidth={2} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const BadgeIcon = badges[index]?.icon || Shield
  const isTopChoice = casino.rank === 1

  return (
    <div className="relative group">
      <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block">
        {/* Desktop Layout */}
        <div
          className={`hidden lg:block relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.01] ${
            isTopChoice ? "border-2 border-primary/50 gold-glow" : "border border-border/50 hover:border-primary/30"
          }`}
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl" />

          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: isTopChoice
                  ? `radial-gradient(circle at 0% 0%, rgba(212,175,55,0.3) 0%, transparent 30%)`
                  : `radial-gradient(circle at 100% 100%, rgba(16,185,129,0.2) 0%, transparent 30%)`,
              }}
            />
          </div>

          {/* Badge Header */}
          <div
            className={`relative z-10 flex items-center justify-center gap-2 py-3 px-6 ${
              isTopChoice
                ? "bg-gradient-to-r from-primary via-amber-500 to-primary text-primary-foreground"
                : "bg-gradient-to-r from-secondary/80 to-emerald-600/80 text-secondary-foreground"
            }`}
          >
            <span className="font-bold text-sm tracking-wider">
              #{casino.rank} {badges[index]?.text}
            </span>
          </div>

          {/* Main Content */}
          <div className="relative z-10 p-6 lg:p-8">
            <div className="flex items-center justify-between gap-8">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-24 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-4">
                  <img
                    src={casino.logo || "/placeholder.svg"}
                    alt={`${casino.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Bonus Section */}
              <div className="flex-1 text-center">
                <p className="text-xs font-semibold text-primary tracking-wider uppercase mb-2">Bónus de Boas-Vindas</p>
                <p className="text-2xl lg:text-3xl font-bold text-foreground">{casino.bonus}</p>
              </div>

              {/* Rating Section */}
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">{casino.rating}</span>
                  <span className="text-sm text-muted-foreground">/10</span>
                </div>
                {renderStars(casino.rating)}
                <p className="text-xs text-muted-foreground">{formatVotes(casino.reviews)} avaliações</p>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col gap-3 flex-shrink-0 w-48">
                <Button
                  className={`w-full font-bold text-sm py-6 ${
                    isTopChoice
                      ? "bg-gradient-to-r from-primary via-amber-500 to-primary hover:from-amber-500 hover:to-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-gradient-to-r from-secondary to-emerald-600 hover:from-emerald-600 hover:to-secondary text-secondary-foreground shadow-lg shadow-secondary/25"
                  }`}
                >
                  <span>OBTER BÓNUS</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-[10px] text-muted-foreground text-center">18+ | Jogo Responsável</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 bg-muted/30 border-t border-border/30 px-6 py-3">
            <p className="text-[11px] text-muted-foreground text-center">
              Aplicam-se termos e condições. Jogue com responsabilidade. O jogo pode causar dependência.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div
          className={`lg:hidden relative rounded-2xl overflow-hidden transition-all duration-300 ${
            isTopChoice ? "border-2 border-primary/50 shadow-lg shadow-primary/20" : "border border-border/50"
          }`}
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/90 via-card/70 to-card/90 backdrop-blur-xl" />

          {/* Badge Header */}
          <div
            className={`relative z-10 flex items-center justify-center gap-2 py-2.5 ${
              isTopChoice
                ? "bg-gradient-to-r from-primary via-amber-500 to-primary text-primary-foreground"
                : "bg-gradient-to-r from-secondary/80 to-emerald-600/80 text-secondary-foreground"
            }`}
          >
            <BadgeIcon className="w-3.5 h-3.5" />
            <span className="font-bold text-xs tracking-wider">
              #{casino.rank} {badges[index]?.text}
            </span>
          </div>

          {/* Main Content */}
          <div className="relative z-10 p-4">
            {/* Logo and Bonus Row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-20 h-14 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 p-2">
                <img
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-primary tracking-wider uppercase mb-1">
                  Bónus Boas-Vindas
                </p>
                <p className="text-sm font-bold text-foreground leading-tight">{casino.bonus}</p>
              </div>
            </div>

            {/* Rating and CTA Row */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/30">
              <div className="flex items-center gap-3">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-bold text-primary">{casino.rating}</span>
                  <span className="text-xs text-muted-foreground">/10</span>
                </div>
                <div className="flex flex-col">
                  {renderStars(casino.rating)}
                  <span className="text-[10px] text-muted-foreground mt-0.5">({formatVotes(casino.reviews)})</span>
                </div>
              </div>
              <Button
                size="sm"
                className={`font-bold text-xs px-6 ${
                  isTopChoice
                    ? "bg-gradient-to-r from-primary to-amber-500 text-primary-foreground"
                    : "bg-gradient-to-r from-secondary to-emerald-600 text-secondary-foreground"
                }`}
              >
                OBTER BÓNUS
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 bg-muted/30 border-t border-border/30 px-4 py-2">
            <p className="text-[9px] text-muted-foreground text-center">18+ | Jogo Responsável | T&C Aplicam-se</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
