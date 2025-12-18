import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product, getBrandLabel } from '@/data/products';
import { generateWhatsAppLink } from '@/utils/whatsapp';

interface ProductCardProps {
  product: Product;
  isHighlighted?: boolean;
}

const ProductCard = ({ product, isHighlighted = true }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const brandLabel = getBrandLabel(product.brand);

  return (
    <div
      className={`product-card group ${
        !isHighlighted ? 'opacity-40 hover:opacity-100' : ''
      }`}
      style={{
        animationDelay: `${Math.random() * 0.3}s`,
      }}
    >
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-estrelas-cream">
          <img
            src={product.image}
            alt={product.name}
            className="product-image w-full h-full object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-display text-base md:text-lg font-medium text-foreground mb-1 line-clamp-2 hover:text-estrelas-pink-dark transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-2">
          {brandLabel}
        </p>

        <p className="text-lg font-semibold text-foreground mb-3">
          {formatPrice(product.price)}
        </p>

        <a
          href={generateWhatsAppLink(product.name, brandLabel)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center text-sm group-hover:scale-[1.02]"
          onClick={(e) => e.stopPropagation()}
        >
          <MessageCircle className="w-4 h-4" />
          Comprar no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
