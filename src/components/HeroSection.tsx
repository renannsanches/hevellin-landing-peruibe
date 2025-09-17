import { Button } from "@/components/ui/button";
import { Target, Heart, Lightbulb, Car } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageUrl = "/lovable-uploads/hevellin2.webp";

  // Imagens para Desktop
  const desktopBackgroundImages = [
    "/lovable-uploads/desktop-1.webp",
    "/lovable-uploads/desktop-2.webp",
    "/lovable-uploads/desktop-3.webp"
  ];

  // Imagens para Mobile
  const mobileBackgroundImages = [
    "/lovable-uploads/mobile-1.webp",
    "/lovable-uploads/mobile-2.webp",
    "/lovable-uploads/mobile-3.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === desktopBackgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, [desktopBackgroundImages.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 min-h-screen overflow-visible">
      {/* Background Image Carousel - Desktop */}
      <div className="absolute inset-0 hidden lg:block">
        {desktopBackgroundImages.map((image, index) => (
          <div
            key={`desktop-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Consultório Desktop ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Background Image Carousel - Mobile */}
      <div className="absolute inset-0 lg:hidden">
        {mobileBackgroundImages.map((image, index) => (
          <div
            key={`mobile-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Consultório Mobile ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-end min-h-[80vh] py-12">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              <div className="flex items-center space-x-4 min-w-0">
                <div className="p-3 rounded-full bg-[#92D1B6]/20 flex-shrink-0">
                  <Target className="w-6 h-6" style={{color: '#92D1B6'}} />
                </div>
                <span className="font-medium text-white text-sm leading-tight">Especialização técnica</span>
              </div>

              <div className="flex items-center space-x-4 min-w-0">
                <div className="p-3 rounded-full bg-[#92D1B6]/20 flex-shrink-0">
                  <Heart className="w-6 h-6" style={{color: '#92D1B6'}} />
                </div>
                <span className="font-medium text-white text-sm leading-tight">Atendimento humanizado</span>
              </div>

              <div className="flex items-center space-x-4 min-w-0">
                <div className="p-3 rounded-full bg-[#92D1B6]/20 flex-shrink-0">
                  <Lightbulb className="w-6 h-6" style={{color: '#92D1B6'}} />
                </div>
                <span className="font-medium text-white text-sm leading-tight">Técnicas inovadoras</span>
              </div>

              <div className="flex items-center space-x-4 min-w-0">
                <div className="p-3 rounded-full bg-[#92D1B6]/20 flex-shrink-0">
                  <Car className="w-6 h-6" style={{color: '#92D1B6'}} />
                </div>
                <span className="font-medium text-white text-sm leading-tight">Sistema Leva e Traz de Pacientes</span>
              </div>
            </div>
          </div>

          {/* Image - Hidden on mobile */}
          <div className="hidden lg:block relative h-full">
            <div
              className={`absolute inset-0 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                src={imageUrl}
                alt="Dra. Hevellin Andrade - Fisioterapeuta especializada"
                className="absolute bottom-0 right-0 w-auto h-[80vh] max-w-none object-bottom z-20"
                style={{
                  transform: 'translate(3rem, 2rem)' // Move para direita e para baixo, além das margens
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;