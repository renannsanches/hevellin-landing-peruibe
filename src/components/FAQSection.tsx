import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
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
          <div 
            ref={ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
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
                className={`bg-card border border-border rounded-lg px-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-white font-medium hover:text-primary bg-primary rounded-t-lg px-4 py-4 -mx-6 -mt-0">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed bg-white px-4 py-4 -mx-6 rounded-b-lg">
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