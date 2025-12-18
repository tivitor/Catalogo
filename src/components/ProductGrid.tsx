import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  activeCategory: string;
}

const ProductGrid = ({ products, activeCategory }: ProductGridProps) => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product) => {
            const isHighlighted = 
              activeCategory === 'todos' || product.brand === activeCategory;

            return (
              <ProductCard
                key={product.id}
                product={product}
                isHighlighted={isHighlighted}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
