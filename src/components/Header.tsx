import { Link } from 'react-router-dom';
import logoEstrelas from '@/assets/logo-estrelas.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center h-12">
        <Link to="/" className="flex items-center">
          <img 
            src={logoEstrelas} 
            alt="Estrelas Moda Feminina" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
