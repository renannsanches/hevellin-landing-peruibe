import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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

        <div className="relative">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card 
                      className={`aspect-square border-border hover:shadow-lg transition-all duration-500 group cursor-pointer ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <CardHeader className="text-center h-3/5 flex flex-col justify-center">
                        <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-10 h-10 text-service-icon" />
                        </div>
                      </CardHeader>
                      <CardContent className="h-2/5 flex flex-col justify-center p-6 pt-0">
                        <CardTitle className="text-lg font-bold text-foreground mb-3 text-center">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-center leading-relaxed text-sm">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute -right-16 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-600 h-12 w-12" />
            <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-600 h-12 w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;