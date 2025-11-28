"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, Sparkles, X } from "lucide-react"
import { getTopCasino } from "@/lib/casinos"

export function TopCasinoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank")
  }

  const starRating = topCasino.rating / 2

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const fillPercentage = Math.min(Math.max((starRating - index) * 100, 0), 100)
      return (
        <div key={index} className="relative inline-block">
          <Star className="h-5 w-5 text-primary/30" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className="h-5 w-5 fill-primary text-primary" />
          </div>
        </div>
      )
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-transparent border-0 shadow-none max-w-md p-0 overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-card/95 backdrop-blur-xl" />
          <div className="absolute inset-0 border border-primary/20 rounded-2xl" />

          {/* Gold glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 border border-white/20 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Header */}
          <div className="relative z-10 bg-gradient-to-r from-primary via-amber-500 to-primary px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-xl font-bold text-primary-foreground">Oferta Exclusiva</h3>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="cursor-pointer hover:bg-muted/10 transition-colors duration-300" onClick={handleModalClick}>
              {/* Logo Section */}
              <div className="p-6 border-b border-border/30">
                <div className="flex justify-center mb-4">
                  <div className="w-56 h-24 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-3">
                    <img
                      src={topCasino.logo || "/placeholder.svg"}
                      alt={`${topCasino.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center gap-1">
                  {renderStars()}
                  <span className="text-lg font-bold text-primary ml-2">{topCasino.rating}/10</span>
                </div>
              </div>

              {/* Bonus Section */}
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2 text-center uppercase tracking-wider">
                  Bónus de Boas-Vindas
                </p>
                <p className="text-3xl font-bold text-center mb-6">
                  <span className="text-gold-gradient">{topCasino.bonus}</span>
                </p>

                <Button className="w-full bg-gradient-to-r from-primary via-amber-500 to-primary hover:from-amber-500 hover:to-primary text-primary-foreground font-bold text-lg py-6 shadow-lg shadow-primary/30">
                  OBTER BÓNUS
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-[10px] text-muted-foreground mt-4 text-center">
                  18+ | Jogo Responsável | T&C Aplicam-se
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
