

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
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
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">14+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
              </div>
            </div>
          </div>

          {/* Generated Image Placeholder */}
          <div className="flex justify-center lg:justify-start">
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