import { Star, CheckCircle, TrendingUp, Search, Layers } from "lucide-react"

export function RatingSystemSection() {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Glass container */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl" />
          <div className="absolute inset-0 border border-border/30 rounded-3xl" />

          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-secondary/5 to-transparent" />

          <div className="relative z-10 p-8 lg:p-14">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-emerald-gradient">Sistema de</span>{" "}
                <span className="text-gold-gradient">Classificação</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Metodologia rigorosa e transparente para avaliar cada casino online em Portugal.
              </p>
            </div>

            {/* Criteria Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
              {/* Licensing */}
              <div className="group p-5 lg:p-6 rounded-xl bg-gradient-to-br from-muted/40 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-base font-bold text-foreground mb-2">Licenciamento</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Verificação de licenças SRIJ e conformidade regulamentar.
                </p>
              </div>

              {/* Security */}
              <div className="group p-5 lg:p-6 rounded-xl bg-gradient-to-br from-muted/40 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all duration-300">

                <h3 className="text-base font-bold text-foreground mb-2">Segurança</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Análise de encriptação SSL, proteção de dados e privacidade.
                </p>
              </div>

              {/* Bonus & RTP */}
              <div className="group p-5 lg:p-6 rounded-xl bg-gradient-to-br from-muted/40 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300">

                <h3 className="text-base font-bold text-foreground mb-2">Bónus & RTP</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Avaliação de ofertas, termos e taxas de retorno ao jogador.
                </p>
              </div>

              {/* Experience */}
              <div className="group p-5 lg:p-6 rounded-xl bg-gradient-to-br from-muted/40 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all duration-300">

                <h3 className="text-base font-bold text-foreground mb-2">Experiência</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Testes de usabilidade, suporte ao cliente e velocidade.
                </p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30">
              <h3 className="text-xl font-bold text-center mb-6">
                <span className="text-gold-gradient">Como Classificamos</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    num: 1,
                    title: "Testes Práticos",
                    desc: "Criamos contas reais e testamos depósitos, jogos e levantamentos.",
                  },
                  {
                    num: 2,
                    title: "Análise Técnica",
                    desc: "Verificamos licenças, certificações de jogos e medidas de segurança.",
                  },
                  {
                    num: 3,
                    title: "Avaliação Comparativa",
                    desc: "Comparamos com padrões da indústria e concorrentes.",
                  },
                  {
                    num: 4,
                    title: "Atualização Contínua",
                    desc: "Revisamos regularmente para garantir informações precisas.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4 p-4 rounded-xl bg-card/30">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                      <span className="text-sm font-bold text-secondary">{step.num}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
