import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-dark-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Willian.dev
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desenvolvedor full-stack apaixonado por criar soluções eficientes e inovadoras. 
              Sempre em busca de novos desafios e oportunidades de aprendizado.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegação Rápida</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Habilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:wllcosta0302@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  wllcosta0302@gmail.com
                </a>
              </div>
              <div className="text-muted-foreground">
                📍 Curitiba - Paraná
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/wllcosta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/wllcosta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Willian Desplanche Costa. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Feito com <Heart size={16} className="text-red-500 mx-1" /> e muito café ☕
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;