import { Users, Award, Shield, Gem } from "lucide-react"

export function AboutUsSection() {
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
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent" />

          <div className="relative z-10 p-8 lg:p-14">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-gold-gradient">Sobre</span> <span className="text-emerald-gradient">Nós</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Especialistas em análise de casinos online em Portugal, dedicados a fornecer informações precisas e
                imparciais.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* Feature 1 */}
              <div className="group p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30 hover:border-primary/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-foreground mb-3">Equipa Experiente</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mais de 10 anos de experiência coletiva na indústria de jogos online e análise de casinos.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30 hover:border-secondary/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-foreground mb-3">Análises Independentes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Avaliações 100% imparciais baseadas em testes reais e critérios objetivos de qualidade.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30 hover:border-primary/30 transition-all duration-500">

                <h3 className="text-xl font-bold text-foreground mb-3">Compromisso com Segurança</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Priorizamos a sua segurança, recomendando apenas casinos licenciados e regulamentados pelo SRIJ.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 border border-border/30">
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                A nossa missão é ajudar jogadores portugueses a encontrar os melhores casinos online através de análises
                detalhadas, comparações transparentes e informações atualizadas sobre bónus, jogos e métodos de
                pagamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
