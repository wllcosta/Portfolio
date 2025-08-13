import { Mail, MapPin, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "wllcosta0302@gmail.com",
      href: "mailto:wllcosta0302@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localização",
      value: "Curitiba - Paraná",
      href: null
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/wllcosta",
      href: "https://github.com/wllcosta"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/wllcosta",
      href: "https://linkedin.com/in/wllcosta"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header">Vamos Conversar</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Entre em Contato
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou sempre aberto a novas oportunidades, projetos interessantes e 
                conversas sobre tecnologia. Sinta-se à vontade para entrar em contato!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 card-gradient hover:scale-105 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Me encontre nas redes
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/wllcosta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-dark text-dark-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/wllcosta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-dark text-dark-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-gradient p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Envie uma Mensagem
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Sua mensagem..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-hero"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;