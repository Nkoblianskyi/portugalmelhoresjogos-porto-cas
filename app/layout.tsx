import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PortugalMelhoresJogos - Melhores Casinos Online em Portugal 2025",
  description:
    "Descubra os melhores casinos online licenciados em Portugal. Rankings exclusivos, bónus generosos e análises detalhadas dos casinos portugueses mais confiáveis.",
  keywords:
    "casinos online portugal, melhores casinos, jogos online, bonus casino, slots portugal, casino licenciado srij",
  authors: [{ name: "PortugalMelhoresJogos" }],
  openGraph: {
    title: "PortugalMelhoresJogos - Melhores Casinos Online em Portugal",
    description: "Rankings exclusivos dos melhores casinos online licenciados pelo SRIJ em Portugal.",
    type: "website",
    locale: "pt_PT",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0f0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="dark">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
