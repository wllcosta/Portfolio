import { Code, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desenvolvimento Full-Stack",
      description: "Experiência com React, Angular, Laravel e integração com APIs REST"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Aprendizado Rápido",
      description: "Capacidade de absorver novas tecnologias e aplicá-las eficientemente"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trabalho em Equipe",
      description: "Experiência em projetos colaborativos e metodologias ágeis"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Foco em Resultados",
      description: "Busco sempre entregar soluções eficientes e responsivas"
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header">Sobre Mim</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg space-y-4">
              <p className="text-foreground leading-relaxed">
                Sou <span className="font-semibold text-primary">Willian Desplanches Costa</span>, Engenheiro de Software e desenvolvedor júnior, com experiência em desenvolvimento front-end e back-end em sistemas web. Atuei na manutenção, evolução e melhoria de funcionalidades, sempre com foco em qualidade, usabilidade e boas práticas de desenvolvimento.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Tenho vivência tanto na construção de interfaces quanto na compreensão das regras de negócio, integrações e comunicação entre as camadas do sistema, o que me permite contribuir de forma mais eficiente para soluções bem estruturadas e funcionais.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Possuo experiência com banco de dados, realizando ajustes, manutenções e consultas para suporte às funcionalidades do sistema. Também atuei com testes unitários e funcionais, documentação técnica e participação em reuniões de planejamento e alinhamento com equipes e stakeholders.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Sou familiarizado com metodologias ágeis, com experiência no uso de ferramentas de organização e acompanhamento de tarefas. Sou proativo, organizado, tenho facilidade de aprendizado e bom trabalho em equipe. Acredito que a tecnologia tem o poder de transformar ideias em realidade, e é isso que me motiva todos os dias.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Projetos Desenvolvidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Anos de Estudo</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-gradient p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;