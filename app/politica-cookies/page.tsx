import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Cookie } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Luxury Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050808] via-[#0a0f0a] to-[#080a08]" />
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-900/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-800/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="max-w-4xl mx-auto px-4 lg:px-8 pt-28 pb-16">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar ao início
          </Link>

          {/* Page Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm mb-6">
              <Cookie className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wider uppercase">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="text-gold-gradient">Política de Cookies</span>
            </h1>
          </div>

          {/* Content Container */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl" />
            <div className="absolute inset-0 border border-border/30 rounded-2xl" />

            <div className="relative z-10 p-6 lg:p-10 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O portugalmelhoresjogos.com utiliza cookies e tecnologias semelhantes para melhorar a sua experiência
                  de navegação, analisar o tráfego do site e personalizar conteúdo. Esta Política de Cookies explica o
                  que são cookies, como os utilizamos e como pode controlá-los.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. O que são Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Estes
                  ficheiros permitem que o site reconheça o seu dispositivo e memorize informações sobre a sua visita.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Os cookies podem ser "persistentes" (permanecem até expirarem ou serem eliminados) ou "de sessão" (são
                  eliminados quando fecha o navegador).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Tipos de Cookies</h2>

                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-muted/20 border border-border/30">
                    <h3 className="text-lg font-semibold text-primary mb-2">3.1 Cookies Essenciais</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Essenciais para o funcionamento do website. Incluem cookies de sessão, segurança e preferências de
                      consentimento.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-muted/20 border border-border/30">
                    <h3 className="text-lg font-semibold text-primary mb-2">3.2 Cookies de Análise</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Permitem-nos contar visitas e analisar o tráfego para melhorar o desempenho do site. Incluem
                      Google Analytics.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-muted/20 border border-border/30">
                    <h3 className="text-lg font-semibold text-primary mb-2">3.3 Cookies de Funcionalidade</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Permitem funcionalidades melhoradas como preferências de idioma e configurações de visualização.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-muted/20 border border-border/30">
                    <h3 className="text-lg font-semibold text-primary mb-2">3.4 Cookies de Marketing</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Utilizados por parceiros de publicidade para mostrar anúncios relevantes. Incluem cookies de
                      afiliados e remarketing.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Como Gerir Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pode controlar e eliminar cookies através das configurações do seu navegador:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                  <li>
                    <strong className="text-foreground">Chrome:</strong> Definições → Privacidade e segurança → Cookies
                  </li>
                  <li>
                    <strong className="text-foreground">Firefox:</strong> Opções → Privacidade e Segurança → Cookies
                  </li>
                  <li>
                    <strong className="text-foreground">Safari:</strong> Preferências → Privacidade → Cookies
                  </li>
                  <li>
                    <strong className="text-foreground">Edge:</strong> Definições → Cookies e permissões do site
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para questões sobre a nossa Política de Cookies, contacte-nos através do formulário disponível no
                  nosso website.
                </p>
              </section>

              <div className="text-sm text-muted-foreground mt-12 pt-8 border-t border-border/30">
                <p>Última atualização: {new Date().toLocaleDateString("pt-PT", { year: "numeric", month: "long" })}</p>
                <p className="mt-2">portugalmelhoresjogos.com - Todos os direitos reservados</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
