import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DiferenciaisSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const diferenciais = [
    {
      icon: "🚐",
      title: "Sistema Leva & Traz",
      description: "Pensando especialmente nos pacientes idosos ou com dificuldade de locomoção, oferecemos transporte exclusivo: um motorista leva até a clínica, aguarda durante a sessão e garante o retorno em segurança e conforto.",
      highlight: true
    },
    {
      icon: "👩🏽‍⚕️",
      title: "Atendimento 100% Especializado",
      description: "Cada tratamento é realizado com foco em dores de face, cabeça e pescoço, DTM, tonturas e zumbido, garantindo cuidado específico e resultados mais eficazes.",
      highlight: false
    },
    {
      icon: "🫂",
      title: "Acolhimento e Orientação Contínua",
      description: "Mais do que as sessões presenciais, nossos pacientes recebem acompanhamento com orientações para o dia a dia: respiração, postura, sono e autocuidado, essenciais para manter os resultados.",
      highlight: false
    },
    {
      icon: "🏥",
      title: "Estrutura Confortável e Humanizada",
      description: "Ambiente planejado para proporcionar bem-estar, privacidade e tranquilidade durante cada atendimento.",
      highlight: false
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Nossos{" "}
            <span className="text-primary">Diferenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que nos torna únicos no cuidado especializado em fisioterapia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {diferenciais.map((diferencial, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                diferencial.highlight 
                  ? 'bg-primary/5 border-2 border-primary/20 ring-2 ring-primary/10' 
                  : 'bg-white border border-gray-200'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {diferencial.highlight && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Destaque Principal
                  </span>
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={`text-4xl ${diferencial.highlight ? 'animate-pulse' : ''}`}>
                  {diferencial.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-4 ${
                    diferencial.highlight ? 'text-primary' : 'text-foreground'
                  }`}>
                    {diferencial.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {diferencial.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;