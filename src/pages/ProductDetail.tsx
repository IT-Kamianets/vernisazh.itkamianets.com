import React, { useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Share2, CheckCircle2, Package, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { products } from '../data/db';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = useMemo(() => {
    return products.find((p) => p.id === id);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-8">
        <h2 className="text-4xl font-playfair font-bold text-deep-slate uppercase tracking-widest">Товар не знайдено</h2>
        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs">Товар, який ви шукаєте, не існує або був видалений.</p>
        <Link to="/catalog" className="inline-block px-10 py-4 bg-deep-slate text-ivory text-sm uppercase tracking-widest font-bold hover:bg-gold transition-colors">
          Назад до каталогу
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
          {/* Product Gallery */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div
              className="relative aspect-[4/3] overflow-hidden bg-white shadow-2xl"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-gold text-deep-slate px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                Новинка
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={product.images[0]} alt="" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-2/5 space-y-10 sticky top-32">
            <div className="space-y-4">
              <p className="text-gold uppercase tracking-[0.3em] font-bold text-sm">{product.category} / {product.style}</p>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-deep-slate leading-tight uppercase tracking-wider">{product.name}</h1>
              <p className="text-3xl font-bold text-deep-slate tracking-tighter">{product.price.toLocaleString()} грн.</p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed font-light">
              <p className="text-lg italic text-deep-slate font-playfair">"{product.description}"</p>
              <p>{product.fullDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-sm text-gray-500 uppercase tracking-widest">
                <Package size={18} className="text-gold" />
                <span>Розміри: {product.dimensions}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500 uppercase tracking-widest">
                <CheckCircle2 size={18} className="text-gold" />
                <span>В наявності</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
              <button className="flex-grow flex items-center justify-center space-x-3 px-10 py-5 bg-deep-slate text-ivory text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 shadow-xl group">
                <ShoppingBag size={20} className="group-hover:-translate-y-1 transition-transform" />
                <span>Додати в кошик</span>
              </button>
              <button className="p-5 border border-gray-200 text-deep-slate hover:border-gold hover:text-gold transition-colors duration-300">
                <Heart size={20} />
              </button>
              <button className="p-5 border border-gray-200 text-deep-slate hover:border-gold hover:text-gold transition-colors duration-300">
                <Share2 size={20} />
              </button>
            </div>

            <div className="space-y-4 pt-10 border-t border-gray-100">
              <div className="flex items-center space-x-4 text-sm uppercase tracking-widest text-deep-slate font-bold">
                <Truck className="text-gold" size={20} />
                <span>Преміальна доставка</span>
              </div>
              <p className="text-xs text-gray-400 pl-9 uppercase tracking-widest leading-loose">
                Безкоштовна преміум-доставка та збірка по Україні для замовлень від 80 000 грн.
              </p>
              <div className="flex items-center space-x-4 text-sm uppercase tracking-widest text-deep-slate font-bold">
                <ShieldCheck className="text-gold" size={20} />
                <span>Сертифікат якості</span>
              </div>
              <p className="text-xs text-gray-400 pl-9 uppercase tracking-widest leading-loose">
                Включає оригінальний сертифікат автентичності та 5-річну структурну гарантію.
              </p>
            </div>
          </div>
        </div>

        {/* Full Specifications Section */}
        <section className="mt-24 pt-24 border-t border-gray-100">
          <h2 className="text-3xl font-playfair font-bold text-deep-slate mb-12 uppercase tracking-widest text-center">Характеристики</h2>
          <div className="max-w-4xl mx-auto overflow-hidden shadow-sm border border-gray-100">
            <table className="w-full text-left border-collapse">
              <tbody>
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-ivory'}>
                    <td className="py-6 px-10 text-xs font-bold uppercase tracking-[0.2em] text-deep-slate border-b border-gray-100 w-1/3">{key}</td>
                    <td className="py-6 px-10 text-sm text-gray-600 border-b border-gray-100 uppercase tracking-widest font-light">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-32">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Вам також може сподобатися</h2>
                <h3 className="text-4xl font-playfair font-bold text-deep-slate uppercase tracking-wider">Схожі моделі</h3>
              </div>
              <Link to="/catalog" className="hidden sm:inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-deep-slate hover:text-gold border-b-2 border-gold pb-1 transition-all">
                Весь каталог <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/catalog/${p.id}`} className="group block space-y-4">
                  <div className="aspect-[4/5] overflow-hidden bg-white shadow-sm">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0" />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-lg font-playfair font-bold text-deep-slate group-hover:text-gold transition-colors duration-300 uppercase tracking-widest">{p.name}</h4>
                    <p className="text-sm font-bold text-deep-slate tracking-tighter">{p.price.toLocaleString()} грн.</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
