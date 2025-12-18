import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProductById, products, getBrandLabel } from '@/data/products';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-semibold mb-4">Produto não encontrado</h1>
            <Link to="/" className="text-estrelas-pink-dark hover:underline">
              Voltar ao catálogo
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const brandLabel = getBrandLabel(product.brand);

  // Get related products (same brand, excluding current)
  const relatedProducts = products
    .filter(p => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{product.name} | Estrelas Moda Feminina</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Spacer for fixed header */}
        <div className="h-12" />

        <main className="flex-1 py-6 md:py-10">
          <div className="container">
            {/* Back button */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao catálogo
            </Link>

            {/* Product Details */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Image */}
              <div className="relative aspect-[3/4] bg-estrelas-cream rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground mb-2">
                  {brandLabel}
                </span>

                <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  {product.name}
                </h1>

                <span className="text-3xl font-bold text-foreground mb-6">
                  {formatPrice(product.price)}
                </span>

                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Sizes */}
                <div className="mb-6">
                  <h3 className="font-medium text-foreground mb-3">Tamanhos disponíveis</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-4 py-2 rounded-md bg-muted text-muted-foreground text-sm font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="mb-8">
                  <h3 className="font-medium text-foreground mb-3">Detalhes do produto</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-estrelas-pink" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={generateWhatsAppLink(product.name, brandLabel)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp px-8 py-4 text-base justify-center mt-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Comprar pelo WhatsApp
                </a>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Tire suas dúvidas e finalize seu pedido pelo WhatsApp
                </p>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section className="mt-16">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Você também pode gostar
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
