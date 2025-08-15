import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Ear, Eye, Users, Waves } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: Brain,
      title: "DTM e Cefaleia",
      description: "Tratamento especializado para dores na face, cabeça e mandíbula, trazendo alívio e qualidade de vida.",
      keyword: "tratamento DTM Peruíbe"
    },
    {
      icon: Ear,
      title: "Reabilitação Vestibular", 
      description: "Melhore equilíbrio, reduza tonturas e recupere a confiança nos movimentos.",
      keyword: "reabilitação vestibular Peruíbe"
    },
    {
      icon: Eye,
      title: "Fisioterapia Ocular",
      description: "Recupere funções oculares e alivie desconfortos relacionados à visão.",
      keyword: "fisioterapia ocular"
    },
    {
      icon: Users,
      title: "Controle Postural",
      description: "Aprimore sua postura e previna dores com técnicas avançadas e personalizadas.",
      keyword: "controle postural Peruíbe"
    },
    {
      icon: Waves,
      title: "Zumbido Somatossensorial",
      description: "Abordagem fisioterapêutica para reduzir o incômodo do zumbido e melhorar o bem-estar.",
      keyword: "tratamento zumbido Peruíbe"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Especialidades que{" "}
            <span className="text-primary">transformam vidas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`border-border hover:shadow-card transition-all duration-1000 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-service-icon" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;