import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experienceCount = useCountUp(14, 2000, isVisible);
  const patientsCount = useCountUp(500, 2000, isVisible);
  const successRate = useCountUp(95, 2000, isVisible);

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            ref={ref}
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                Sobre a{" "}
                <span className="text-primary">Hevellin Andrade</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com mais de <strong className="text-foreground">14 anos de experiência</strong>, 
                a fisioterapeuta Hevellin Andrade é especialista no tratamento de dores de face, 
                cabeça e pescoço, além de reabilitação vestibular, ocular e controle postural.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Sua missão é proporcionar melhora da dor e da qualidade de vida, unindo 
                conhecimento técnico, atenção individualizada e empatia no atendimento.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Award className="w-8 h-8 text-primary" />
                    <div className="text-3xl font-bold text-foreground">{experienceCount}+</div>
                    <div className="text-sm text-muted-foreground">Anos de experiência</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Users className="w-8 h-8 text-primary" />
                    <div className="text-3xl font-bold text-foreground">{patientsCount}+</div>
                    <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <div className="text-3xl font-bold text-foreground">{successRate}%</div>
                    <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Generated Image Placeholder */}
          <div 
            className={`flex justify-center lg:justify-start transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-muted rounded-3xl p-8 w-full max-w-md h-80 flex items-center justify-center shadow-card">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">👩‍⚕️</div>
                  <p className="text-sm">Imagem profissional da<br />Dra. Hevellin atendendo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;