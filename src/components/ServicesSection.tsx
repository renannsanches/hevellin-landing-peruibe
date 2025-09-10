import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import dtmImage from "@/assets/dtm-treatment.jpg";
import vestibularImage from "@/assets/vestibular-rehab.jpg";
import eyeImage from "@/assets/eye-therapy.jpg";
import posturalImage from "@/assets/postural-control.jpg";
import tinnitusImage from "@/assets/tinnitus-treatment.jpg";
import cefaleia from "@/assets/cefaleia.jpg";
import paralisia from "@/assets/paralisiafacial.jpg";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      image: dtmImage,
      title: "DTM",
      description: "Tratamento especializado para disfunção temporomandibular, aliviando dores na face e mandíbula.",
      keyword: "tratamento DTM Peruíbe"
    },
    {
      image: cefaleia,
      title: "Cefaleia",
      description: "Tratamento especializado para dores de cabeça e enxaquecas, proporcionando alívio e qualidade de vida.",
      keyword: "tratamento cefaleia Peruíbe"
    },
    {
      image: vestibularImage,
      title: "Reabilitação Vestibular", 
      description: "Melhore equilíbrio, reduza tonturas e recupere a confiança nos movimentos.",
      keyword: "reabilitação vestibular Peruíbe"
    },
    {
      image: eyeImage,
      title: "Fisioterapia Ocular",
      description: "Recupere funções oculares e alivie desconfortos relacionados à visão.",
      keyword: "fisioterapia ocular"
    },
    {
      image: posturalImage,
      title: "Controle Postural",
      description: "Aprimore sua postura e previna dores com técnicas avançadas e personalizadas.",
      keyword: "controle postural Peruíbe"
    },
    {
      image: tinnitusImage,
      title: "Zumbido Somatossensorial",
      description: "Abordagem fisioterapêutica para reduzir o incômodo do zumbido e melhorar o bem-estar.",
      keyword: "tratamento zumbido Peruíbe"
    },
    {
      image: paralisia,
      title: "Paralisia Facial",
      description: "Reabilitação especializada para recuperação da função facial e melhora da expressão.",
      keyword: "tratamento paralisia facial Peruíbe"
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
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card
                    className={`aspect-square border-border shadow-md hover:shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="h-3/5 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="h-2/5 flex flex-col justify-center p-6">
                      <CardTitle className="text-lg font-bold text-foreground mb-3 text-center">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-center leading-relaxed text-sm">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
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