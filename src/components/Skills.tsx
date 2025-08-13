const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Angular", "Laravel", 
    "PHP", "MySQL", "Bootstrap", "Git", "APIs REST", "SQL Server", 
    "Node.js", "Responsividade", "Controle de Versão", 
    "Otimização de Performance", "Segurança de Aplicações"
  ];

  const categories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Bootstrap"],
      color: "from-primary to-primary-hover"
    },
    {
      title: "Backend",
      skills: ["Laravel", "PHP", "Node.js", "APIs REST"],
      color: "from-dark to-primary"
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL Server"],
      color: "from-primary to-dark"
    },
    {
      title: "Ferramentas",
      skills: ["Git", "Controle de Versão", "Otimização de Performance", "Segurança de Aplicações", "Responsividade"],
      color: "from-accent-foreground to-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header">Habilidades Técnicas</h2>
        
        {/* All Skills Cloud */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            Tecnologias que domino
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-badge hover:scale-110 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Categorized Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card-gradient p-6 text-center hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Category Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white">
                  {category.title.charAt(0)}
                </span>
              </div>
              
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              {/* Category Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning & Goals */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Sempre Aprendendo
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estou constantemente expandindo meu conhecimento e explorando novas tecnologias. 
            Atualmente focado em aprofundar conhecimentos em arquitetura de software, 
            testes automatizados e DevOps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;