import { MapPin, Trophy, Sparkles, TrendingUp, Crown } from "lucide-react"

export function TopSitesPortugalSection() {
  return (
    <section className="py-16 lg:py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 lg:px-8">
        {/* Glass container */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl" />
          <div className="absolute inset-0 border border-border/30 rounded-3xl" />

          {/* Decorative gradient */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent" />

          <div className="relative z-10 p-8 lg:p-14">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">

              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-gold-gradient">Top Casinos</span>{" "}
                <span className="text-emerald-gradient">em Portugal</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Os melhores sites de casino online licenciados e regulamentados para jogadores portugueses.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Regulated Market */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Mercado Regulamentado</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Desde 2015, Portugal possui um mercado de jogos online totalmente regulamentado pelo SRIJ,
                      garantindo segurança e proteção aos jogadores.
                    </p>
                  </div>
                </div>
              </div>

              {/* Licensed Casinos */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30 hover:border-secondary/30 transition-all duration-300">
                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Casinos Licenciados</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Todos os casinos no nosso ranking possuem licença válida emitida pelo SRIJ, cumprindo rigorosos
                      requisitos de segurança e jogo responsável.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exclusive Bonuses */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Bónus Exclusivos</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Os melhores casinos oferecem bónus de boas-vindas generosos, promoções regulares e programas VIP
                      especialmente desenhados para o mercado português.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30 hover:border-secondary/30 transition-all duration-300">
                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Métodos de Pagamento</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Suporte para métodos populares em Portugal como MB Way, Multibanco, cartões de crédito e carteiras
                      digitais, com transações rápidas e seguras.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose */}
            <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 border border-border/30">
              <h3 className="text-xl font-bold text-center mb-4">
                <span className="text-emerald-gradient">Por que</span>{" "}
                <span className="text-gold-gradient">Escolher</span>{" "}
                <span className="text-foreground">Casinos Portugueses?</span>
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
                Os casinos online licenciados em Portugal oferecem proteção legal completa, suporte em português,
                métodos de pagamento locais e conformidade com as leis de jogo responsável. Ao escolher um casino do
                nosso ranking, garante uma experiência segura, justa e adaptada às suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
