"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full z-50">
      {/* Glass background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-xl" />

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30">
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="drop-shadow-lg" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-gold-gradient tracking-tight">
                PortugalMelhoresJogos
              </span>
              <span className="text-[10px] lg:text-xs text-muted-foreground tracking-widest uppercase">
                Casinos Premium
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#rankings"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Rankings
            </a>
            <a
              href="/#faq"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              FAQ
            </a>
            <Link
              href="/politica-privacidade"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Sobre
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href="#rankings"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-amber-600 text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            Ver Top Casinos
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border">
            <nav className="flex flex-col p-4 gap-4">
              <a
                href="#rankings"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Rankings
              </a>
              <a
                href="#faq"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                FAQ
              </a>
              <Link
                href="/politica-privacidade"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Sobre
              </Link>
              <a
                href="#rankings"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-amber-600 text-primary-foreground font-semibold text-sm mt-2"
              >
                Ver Top Casinos
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
