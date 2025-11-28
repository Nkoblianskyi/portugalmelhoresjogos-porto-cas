import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-secondary/20 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-xs font-medium text-secondary tracking-wider uppercase">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="text-emerald-gradient">Política de Privacidade</span>
            </h1>
          </div>

          {/* Content Container */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl" />
            <div className="absolute inset-0 border border-border/30 rounded-2xl" />

            <div className="relative z-10 p-6 lg:p-10 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O portugalmelhoresjogos.com está comprometido em proteger a sua privacidade e os seus dados pessoais.
                  Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos as suas informações.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ao utilizar o nosso website, concorda com a recolha e utilização de informações de acordo com esta
                  política.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações Recolhidas</h2>

                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-muted/20 border border-border/30">
                    <h3 className="text-lg font-semibold text-secondary mb-2">2.1 Informações Diretas</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Informações fornecidas quando se regista para newsletter, preenche formulários ou comunica
                      connosco:
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc pl-5">
                      <li>Nome e endereço de email</li>
                      <li>Preferências de comunicação</li>
                      <li>Localização geográfica</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-muted/20 border border-border/30">
                    <h3 className="text-lg font-semibold text-secondary mb-2">2.2 Informações Automáticas</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Recolhidas automaticamente através de cookies:
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc pl-5">
                      <li>Endereço IP e localização aproximada</li>
                      <li>Tipo de navegador e sistema operativo</li>
                      <li>Páginas visitadas e tempo de visita</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Utilização das Informações</h2>
                <ul className="text-muted-foreground space-y-3 list-disc pl-6">
                  <li>
                    <strong className="text-foreground">Serviços:</strong> Operar, manter e melhorar o website
                  </li>
                  <li>
                    <strong className="text-foreground">Comunicação:</strong> Enviar newsletters e atualizações (com
                    consentimento)
                  </li>
                  <li>
                    <strong className="text-foreground">Personalização:</strong> Fornecer conteúdo relevante
                  </li>
                  <li>
                    <strong className="text-foreground">Análise:</strong> Analisar tendências e comportamento dos
                    utilizadores
                  </li>
                  <li>
                    <strong className="text-foreground">Segurança:</strong> Detetar e prevenir problemas técnicos
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Os Seus Direitos (RGPD)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De acordo com o RGPD, tem os seguintes direitos:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                  <li>
                    <strong className="text-foreground">Acesso:</strong> Solicitar cópia das suas informações
                  </li>
                  <li>
                    <strong className="text-foreground">Retificação:</strong> Corrigir informações incorretas
                  </li>
                  <li>
                    <strong className="text-foreground">Apagamento:</strong> Solicitar eliminação dos dados
                  </li>
                  <li>
                    <strong className="text-foreground">Portabilidade:</strong> Transferir dados para outro serviço
                  </li>
                  <li>
                    <strong className="text-foreground">Oposição:</strong> Opor-se ao processamento para marketing
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de segurança técnicas incluindo encriptação SSL/TLS, armazenamento seguro em
                  servidores protegidos e acesso restrito a informações pessoais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Jogo Responsável</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Promovemos o jogo responsável. Se tiver problemas com o jogo, procure ajuda:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                  <li>
                    <a
                      href="https://www.jogoresponsavel.pt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Jogo Responsável Portugal
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sicad.pt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      SICAD
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gamcare.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GamCare
                    </a>
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para questões sobre esta Política de Privacidade ou tratamento dos seus dados pessoais, contacte-nos
                  através do formulário disponível no website.
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
