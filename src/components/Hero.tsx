import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-primary/10" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent border-2 border-primary/30 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-primary to-dark rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-glow hover:scale-105 transition-transform duration-300">
            <img
              src="https://avatars.githubusercontent.com/u/136715531?v=4"
              alt="Willian Desplanche Costa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="block text-foreground">Olá, eu sou</span>
          <span className="block bg-gradient-to-r from-primary to-dark bg-clip-text text-transparent">
            Willian Desplanches Costa
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Engenheiro de Software | Desenvolvedor Frontend
        </p>

        {/* Slogan */}
        <p className="text-lg md:text-xl font-medium text-primary mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Transformando ideias em código
        </p>

        {/* Location */}
        <p className="text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          📍 Curitiba - Paraná
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button
            onClick={scrollToProjects}
            className="btn-hero flex items-center gap-2"
          >
            Ver Projetos
            <ArrowDown size={20} />
          </button>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/wllcosta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark text-dark-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/wllcosta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark text-dark-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:wllcosta0302@gmail.com"
              className="p-3 rounded-full bg-dark text-dark-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;