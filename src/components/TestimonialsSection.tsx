import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria S.",
      text: "Após iniciar o tratamento com a Dra. Hevellin, minhas dores de cabeça diminuíram muito e minha postura melhorou. Atendimento excelente e acolhedor!",
      rating: 5
    },
    {
      name: "João P.",
      text: "Sofria com tonturas há anos. Após o tratamento de reabilitação vestibular, recuperei minha confiança para caminhar e dirigir. Muito grato!",
      rating: 5
    },
    {
      name: "Ana L.",
      text: "O tratamento para DTM foi fundamental para melhorar minha qualidade de vida. Profissional competente e muito atenciosa.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            O que dizem nossos{" "}
            <span className="text-primary">pacientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.text}"
                </blockquote>
                
                <cite className="text-foreground font-medium not-italic">
                  – {testimonial.name}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;