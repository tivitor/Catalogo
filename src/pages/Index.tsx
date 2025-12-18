import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  return (
    <>
      <Helmet>
        <title>Estrelas Moda Feminina | Catálogo Bocaiuva</title>
        <meta 
          name="description" 
          content="Catálogo online da loja Estrelas Moda Feminina. Peças selecionadas com atendimento via WhatsApp." 
        />
        <meta name="keywords" content="moda feminina, roupas femininas, Bocaiuva, MG, vestidos, blusas, calças, conjuntos" />
        <link rel="canonical" href="https://estrelasmodafeminina.com.br" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Spacer for fixed header */}
        <div className="h-12" />

        {/* Brand Filter */}
        <CategoryFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {/* Product Grid */}
        <main className="flex-1">
          <ProductGrid products={products} activeCategory={activeCategory} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
