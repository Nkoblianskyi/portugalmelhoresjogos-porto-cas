"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookies-accepted")
    if (!hasAcceptedCookies) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-card/95 backdrop-blur-xl" />
          <div className="absolute inset-0 border border-border/50 rounded-2xl" />

          <div className="relative z-10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                Utilizamos cookies para melhorar a sua experiência.{" "}
                <a href="/politica-cookies" className="text-primary hover:underline">
                  Saiba mais
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={acceptCookies}
                className="bg-gradient-to-r from-primary to-amber-600 hover:from-amber-600 hover:to-primary text-primary-foreground font-semibold px-6"
              >
                Aceitar
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsVisible(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
