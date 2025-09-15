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
      description: "Tratamento fisioterapêutico especializado para disfunção temporomandibular (DTM), ajudando a reduzir dores na face, mandíbula e região cervical, além de melhorar a função mastigatória.",
      keyword: "tratamento DTM em Peruíbe"
    },
    {
      image: cefaleia,
      title: "Cefaleia",
      description: "Abordagem fisioterapêutica para dores de cabeça e enxaquecas, com técnicas que aliviam a tensão muscular, reduzem crises e promovem mais qualidade de vida.",
      keyword: "tratamento cefaleia em Peruíbe"
    },
    {
      image: vestibularImage,
      title: "Reabilitação Vestibular", 
      description: "Programa de fisioterapia indicado para quem sofre com tonturas, vertigens e desequilíbrio. O tratamento auxilia na adaptação do sistema vestibular e na recuperação da confiança nos movimentos.",
      keyword: "reabilitação vestibular em Peruíbe"
    },
    {
      image: eyeImage,
      title: "Fisioterapia Ocular",
      description: "Fisioterapia voltada para a reabilitação dos músculos extraoculares, auxiliando em distúrbios como estrabismo, fadiga ocular e dificuldades de coordenação visual, sem prometer melhora direta da visão.",
      keyword: "fisioterapia ocular em Peruíbe"
    },
    {
      image: posturalImage,
      title: "Controle Postural",
      description: "Tratamento fisioterapêutico que avalia e corrige desequilíbrios posturais, prevenindo dores na coluna, ombros e pescoço. Indicado para todas as idades, com foco em saúde e bem-estar.",
      keyword: "controle postural em Peruíbe"
    },
    {
      image: tinnitusImage,
      title: "Zumbido Somatossensorial",
      description: "Tratamento fisioterapêutico direcionado ao zumbido somatossensorial, ajudando a reduzir a intensidade do incômodo por meio da reeducação muscular e melhora da função cervical e mandibular.",
      keyword: "tratamento zumbido em Peruíbe"
    },
    {
      image: paralisia,
      title: "Paralisia Facial",
      description: "Reabilitação fisioterapêutica especializada para paralisia facial, com exercícios que estimulam a recuperação da mobilidade, da simetria e da expressão facial.",
      keyword: "tratamento paralisia facial em Peruíbe"
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