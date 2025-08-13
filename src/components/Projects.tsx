import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Flexihire",
      description: "Sistema web para conectar estabelecimentos e profissionais para trabalhos temporários, facilitando a busca, contratação e gestão de oportunidades. Possui autenticação, gerenciamento de perfis e filtros avançados.",
      technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Boookzone",
      description: "Plataforma CRUD para cadastro, busca, download e upload de livros em PDF, com recursos de avaliações, comentários, favoritos e filtros por categoria.",
      technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "ShinSekai",
      description: "Sistema colaborativo para gerenciamento de equipes e submissão de trabalhos acadêmicos com controle de versões, comentários e dashboard para status.",
      technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header">Projetos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-gradient overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-dark/20 h-48 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/30">
                  {project.name.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`Ver código do ${project.name}`}
                  >
                    <Github size={18} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`Ver demo do ${project.name}`}
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interessado em ver mais trabalhos ou colaborar em um projeto?
          </p>
          <a
            href="https://github.com/wllcosta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark inline-flex items-center gap-2"
          >
            <Github size={20} />
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;