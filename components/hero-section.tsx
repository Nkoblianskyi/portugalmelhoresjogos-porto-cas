"use client"

import { useEffect, useState } from "react"
import { Shield, Star, ChevronDown, Lock, CheckCircle, ShieldCheck, Search, ExternalLink } from "lucide-react"
import Image from "next/image"
import { getTopCasino } from "@/lib/casinos"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentYear = new Date().getFullYear()

  const now = new Date()
  const updateDate = now.toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden bg-background">
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          backgroundImage: `url('/luxury-dark-casino-interior-with-golden-lights-por.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>

      {/* Diagonal split background - Desktop only */}
      <div className="absolute inset-0 hidden lg:block">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 70%)",
          }}
        />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <div
          className={`absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        />
        <div
          className={`absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px] transition-all duration-1000 delay-300 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full">
        <div className="grid lg:grid-cols-12 h-full">
          {/* Left side - Main content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 lg:px-16 py-4 lg:py-8 h-full">
            <div
              className={`space-y-1 lg:space-y-2 transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-1 lg:mb-2">
                <span className="text-[8px] lg:text-xs text-primary bg-primary/10 px-2 py-0.5 lg:px-3 lg:py-1 rounded-full">
                  Atualizado: {updateDate}
                </span>
              </div>

              <h1 className="font-bold tracking-tight leading-none">
                <span className="block text-foreground/40 text-[8px] lg:text-3xl font-light tracking-[0.15em] lg:tracking-[0.2em] uppercase mb-0.5 lg:mb-2">
                  Descubra os
                </span>
                <span className="block text-gold-gradient text-6xl lg:text-6xl xl:text-7xl">MELHORES</span>
                <span className="block text-foreground text-6xl lg:text-6xl xl:text-7xl">CASINOS</span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-1.5 lg:gap-3 mt-1 lg:mt-3">
                <div className="flex -space-x-0.5 lg:-space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 lg:w-5 lg:h-5 text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground text-[8px] lg:text-sm">Portugal {currentYear}</span>
              </div>
            </div>

            <div
              className={`relative pl-6 border-l-2 border-primary/30 mb-6 max-w-lg transition-all duration-700 delay-300 hidden xl:block ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Rankings profissionais e análises independentes dos casinos online
                <span className="text-primary font-semibold"> licenciados pelo SRIJ</span>. A sua segurança é a nossa
                prioridade.
              </p>
            </div>

            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-3 mt-3 lg:mt-0 transition-all duration-700 delay-450 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <a
                href="#rankings"
                className="hidden md:block group relative px-3 lg:px-6 py-1.5 lg:py-3 bg-primary text-primary-foreground font-bold text-[9px] lg:text-sm tracking-wider uppercase overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1 lg:gap-2">
                  Ver Rankings
                  <ChevronDown className="w-2.5 h-2.5 lg:w-4 lg:h-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              <div className="flex items-center gap-1.5 lg:gap-2 px-2 lg:px-4 py-1.5 lg:py-3 border border-border/50 bg-card/30 backdrop-blur-sm">
                <Image src="/srij.svg" alt="SRIJ" width={12} height={12} className="lg:w-5 lg:h-5" />
                <span className="text-[8px] lg:text-xs text-muted-foreground">100% Licenciados</span>
              </div>
            </div>

            <div
              className={`flex items-center justify-center gap-2 mt-2 lg:hidden ${mounted ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex items-center gap-0.5">
                <Lock className="w-2.5 h-2.5 text-primary" />
                <span className="text-sm text-muted-foreground">SSL</span>
              </div>
              <div className="flex items-center gap-0.5">
                <CheckCircle className="w-2.5 h-2.5 text-primary" />
                <span className="text-sm text-muted-foreground">SRIJ</span>
              </div>
              <div className="flex items-center gap-0.5">
                <ShieldCheck className="w-2.5 h-2.5 text-primary" />
                <span className="text-sm text-muted-foreground">RGPD</span>
              </div>
              <div className="flex items-center gap-0.5">
                <Search className="w-2.5 h-2.5 text-primary" />
                <span className="text-sm text-muted-foreground">Verificado</span>
              </div>
            </div>
          </div>

          {/* Right side - Casino card - Desktop only */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            {/* Decorative frame */}
            <div
              className={`absolute inset-4 border border-primary/20 transition-all duration-1000 delay-500 hidden xl:block ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Floating casino elements */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className={`relative z-10 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 rotate-6"}`}
              >
                <div className="w-56 xl:w-64 h-auto bg-gradient-to-br from-card via-card to-card/80 border border-primary/30 rounded-xl p-4 shadow-2xl shadow-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">#{topCasino.rank}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        Top Casino {currentYear}
                      </span>
                    </div>
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 text-primary fill-primary" />
                      ))}
                    </div>
                  </div>

                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 mb-3 flex items-center justify-center border border-border/50 p-2">
                    <Image
                      src={topCasino.logo || "/placeholder.svg"}
                      alt={topCasino.name}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-3 text-center">{topCasino.name}</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Bónus</span>
                      <span className="text-primary font-semibold">{topCasino.bonus}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Rating</span>
                      <span className="text-foreground font-semibold">{topCasino.rating}/10</span>
                    </div>
                    <div className="h-px bg-border/50" />
                    <div className="flex items-center gap-2 text-[10px] text-secondary">
                      <Shield className="w-3 h-3" />
                      <span>Licenciado SRIJ</span>
                    </div>
                  </div>

                  <a
                    href={topCasino.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-primary text-primary-foreground font-bold text-xs rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Visitar Casino
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Background floating cards */}
              <div
                className={`absolute top-8 -left-2 w-36 h-48 bg-card/50 border border-border/30 rounded-xl rotate-[-15deg] transition-all duration-1000 delay-500 hidden xl:block ${mounted ? "opacity-60 translate-x-0" : "opacity-0 -translate-x-8"}`}
              />
              <div
                className={`absolute bottom-8 -right-2 w-36 h-48 bg-card/50 border border-border/30 rounded-xl rotate-[15deg] transition-all duration-1000 delay-700 hidden xl:block ${mounted ? "opacity-60 translate-x-0" : "opacity-0 translate-x-8"}`}
              />

              {/* Floating chips */}
              <div
                className={`absolute top-16 right-8 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center transition-all duration-1000 delay-600 hidden xl:flex ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
              >
                <span className="text-primary text-xs font-bold">€</span>
              </div>
              <div
                className={`absolute bottom-24 left-6 w-6 h-6 rounded-full bg-secondary/20 border-2 border-secondary/40 transition-all duration-1000 delay-800 hidden xl:block ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
              />
            </div>
          </div>
        </div>

        {/* Trust indicators bar - Desktop only */}
        <div
          className={`absolute bottom-0 left-0 right-0 border-t border-border/30 bg-card/30 backdrop-blur-md transition-all duration-1000 delay-700 hidden lg:block ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-4 divide-x divide-border/30">
              {[
                { icon: Lock, label: "Encriptação SSL 256-bit" },
                { icon: CheckCircle, label: "Licença SRIJ Verificada" },
                { icon: ShieldCheck, label: "Proteção de Dados RGPD" },
                { icon: Search, label: "Análise Independente" },
              ].map((item, i) => (
                <div key={i} className="py-4 px-4 flex items-center justify-start gap-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
