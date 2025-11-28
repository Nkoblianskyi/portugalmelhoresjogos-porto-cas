import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

      <div className="relative max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30">
                <Image src="/favicon.ico" alt="Logo" width={28} height={28} />
              </div>
              <span className="text-lg font-bold text-gold-gradient">PortugalMelhoresJogos</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              O seu guia confiável para os melhores casinos online licenciados em Portugal. Análises imparciais, bónus
              exclusivos e informação atualizada.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 border border-border/30">
              <span className="text-sm text-muted-foreground">Jogue com responsabilidade.</span>
              <span className="text-sm font-semibold text-primary">+18</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#rankings" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Rankings
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  href="/politica-privacidade"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/politica-privacidade"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-cookies"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Certification Logos */}
        <div className="border-t border-border/30 mt-10 pt-10">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 mb-8">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src="/srij.svg" alt="SRIJ" className="h-8 w-auto" />
            </Link>
            <Link
              href="https://www.icad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/icad.png" alt="ICAD" className="h-10 w-auto bg-white p-1.5 rounded" />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-10 w-auto bg-white p-1.5 rounded" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 w-auto" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-10 w-auto bg-white p-1.5 rounded" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center space-y-4">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Este site contém links de afiliados. Podemos receber comissões quando clica nestes links. Isto não afeta as
            nossas análises ou rankings.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 <span className="text-primary">portugalmelhoresjogos.com</span> - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
