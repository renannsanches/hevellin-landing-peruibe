import { Button } from "@/components/ui/button";
import { Target, Heart, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/lovable-uploads/03ec9a41-f7e3-4823-aee4-22fd9176bdf8.png",
    "/lovable-uploads/992c6ba8-2383-42e7-81cc-4b8d05cb6ac9.png"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda imagem a cada 5 segundos
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 min-h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Consultório ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Content */}
          <div 
            ref={ref}
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-serif font-semibold text-white leading-tight">
                Fisioterapia Especializada para{" "}
                <span style={{color: '#92D1B6'}}>Dor, Equilíbrio</span>{" "}
                e Qualidade de Vida
              </h1>
              
              <p className="text-xl lg:text-2xl text-white leading-relaxed">
                Tratamentos personalizados para dores de cabeça, face e pescoço, 
                reabilitação vestibular e ocular, controle postural e zumbido somatossensorial.
              </p>
            </div>

            <Button 
              variant="success"
              size="lg"
              className="font-semibold px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Agendar Consulta
            </Button>

            {/* Diferenciais */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-white">Especialização técnica</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-white">Atendimento humanizado</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-white">Técnicas exclusivas e inovadoras</span>
              </div>
            </div>
          </div>

          {/* Image - Hidden on mobile */}
          <div 
            className={`hidden lg:flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src="/lovable-uploads/5078a0fc-7a9e-4aad-8c37-790e90eeaea2.png" 
                alt="Dra. Hevellin Andrade - Fisioterapeuta especializada" 
                className="relative w-full max-w-md lg:max-w-lg h-auto object-cover rounded-3xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;