import { Button } from "@/components/ui/button";
import { Target, Heart, Lightbulb } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
                Fisioterapia Especializada para{" "}
                <span className="text-primary">Dor, Equilíbrio</span>{" "}
                e Qualidade de Vida
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
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
                <span className="font-medium text-foreground">Especialização técnica</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">Atendimento humanizado</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">Técnicas exclusivas e inovadoras</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src="/lovable-uploads/b95801ab-424f-4266-b815-1f3a877b94b1.png" 
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