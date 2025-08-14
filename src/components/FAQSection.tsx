import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O tratamento dói?",
      answer: "Não, nossas técnicas são adaptadas para conforto e segurança do paciente. Priorizamos sempre o bem-estar durante todo o processo terapêutico."
    },
    {
      question: "Quantas sessões são necessárias?",
      answer: "Depende da avaliação inicial e da evolução de cada caso. Cada paciente tem sua particularidade, e o plano de tratamento é personalizado conforme as necessidades individuais."
    },
    {
      question: "Atendem convênios?",
      answer: "O atendimento é particular, com emissão de recibo para reembolso quando possível junto ao seu convênio médico."
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "Na primeira consulta realizamos uma avaliação completa, com anamnese detalhada e exame físico específico para identificar as causas dos seus sintomas e elaborar o melhor plano de tratamento."
    },
    {
      question: "Qual a duração de cada sessão?",
      answer: "Cada sessão tem duração aproximada de 50 minutos, tempo suficiente para realizar todas as técnicas necessárias com qualidade e atenção individualizada."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              Perguntas{" "}
              <span className="text-primary">Frequentes</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;