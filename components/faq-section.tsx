import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Os casinos online são legais em Portugal?",
    answer:
      "Sim, os casinos online são completamente legais em Portugal desde 2015. Todos os operadores devem ter licença do SRIJ (Serviço de Regulação e Inspeção de Jogos) para operar legalmente no país.",
  },
  {
    question: "Como posso verificar se um casino é licenciado?",
    answer:
      "Pode verificar se um casino tem licença portuguesa consultando a lista oficial no site do SRIJ ou procurando o número de licença no rodapé do site do casino. Todos os casinos que recomendamos são licenciados.",
  },
  {
    question: "Que métodos de pagamento posso usar?",
    answer:
      "Os casinos portugueses oferecem vários métodos: cartões de crédito/débito, MB Way, transferência bancária, Neteller, Skrill e outros e-wallets. Os depósitos são geralmente instantâneos.",
  },
  {
    question: "Quanto tempo demoram os levantamentos?",
    answer:
      "Os tempos variam por método: e-wallets (0-24h), cartões (1-3 dias), transferências bancárias (1-5 dias). Casinos licenciados devem processar levantamentos dentro de prazos razoáveis.",
  },
  {
    question: "Posso jogar no telemóvel?",
    answer:
      "Sim, todos os casinos modernos têm versões móveis otimizadas ou apps dedicadas. Pode jogar a partir de qualquer smartphone ou tablet com ligação à internet.",
  },
  {
    question: "Como funcionam os bónus de boas-vindas?",
    answer:
      "Os bónus de boas-vindas são ofertas para novos jogadores, geralmente matching do primeiro depósito. Têm sempre requisitos de apostas que deve cumprir antes de levantar os ganhos.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 lg:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Glass container */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl" />
          <div className="absolute inset-0 border border-border/30 rounded-3xl" />

          <div className="relative z-10 p-8 lg:p-14">
            {/* Header */}
            <div className="text-center mb-10 lg:mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 mb-6">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary tracking-wider uppercase">Dúvidas</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-foreground">Perguntas </span>
                <span className="text-gold-gradient">Frequentes</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Encontre respostas às questões mais comuns sobre casinos online em Portugal.
              </p>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/30 rounded-xl overflow-hidden bg-muted/20 data-[state=open]:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary px-6 py-5 text-base font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base px-6 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
