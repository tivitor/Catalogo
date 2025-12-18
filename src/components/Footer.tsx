import { MessageCircle, Instagram } from 'lucide-react';
import { generateGeneralWhatsAppLink } from '@/utils/whatsapp';
import logoEstrelas from '@/assets/logo-estrelas.png';

const Footer = () => {
  return (
    <footer className="bg-estrelas-cream py-8 mt-12">
      <div className="container">
        <div className="text-center">
          <img 
            src={logoEstrelas} 
            alt="Estrelas" 
            className="h-12 w-auto mx-auto mb-4 object-contain"
          />
          
          <p className="text-sm text-muted-foreground mb-1">
            Moda Feminina
          </p>
          <p className="text-sm text-muted-foreground mb-1">
            Atendimento exclusivo via WhatsApp
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Bocaiuva – MG
          </p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={generateGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-whatsapp hover:bg-whatsapp/10 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-estrelas-pink-dark hover:bg-estrelas-pink/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Estrelas Moda Feminina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
