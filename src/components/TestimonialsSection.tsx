import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const testimonials = [
    {
      name: "Maria S.",
      text: "Após iniciar o tratamento com a Dra. Hevellin, minhas dores de cabeça diminuíram muito e minha postura melhorou. Atendimento excelente e acolhedor!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "João P.",
      text: "Sofria com tonturas há anos. Após o tratamento de reabilitação vestibular, recuperei minha confiança para caminhar e dirigir. Muito grato!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana L.",
      text: "O tratamento para DTM foi fundamental para melhorar minha qualidade de vida. Profissional competente e muito atenciosa.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            O que dizem nossos{" "}
            <span className="text-primary">pacientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`border-border hover:shadow-card transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <cite className="text-foreground font-medium not-italic block">
                      {testimonial.name}
                    </cite>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;