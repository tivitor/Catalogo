import { brands } from '@/data/products';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="sticky top-12 z-40 bg-background/95 backdrop-blur-sm py-4 border-b border-border">
      <div className="container">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onCategoryChange(brand.id)}
              className={`filter-chip whitespace-nowrap ${
                activeCategory === brand.id ? 'active' : ''
              }`}
            >
              {brand.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
