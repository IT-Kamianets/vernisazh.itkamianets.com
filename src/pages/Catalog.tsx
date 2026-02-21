import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, ShoppingBag, Heart } from 'lucide-react';
import { products, categories } from '../data/db';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const categoryFilter = searchParams.get('category') || 'Всі';
  const styleFilter = searchParams.get('style') || 'Всі';

  const styles = ['Всі', 'Класика', 'Модерн', 'Бароко', 'Мінімалізм'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = categoryFilter === 'Всі' || p.category === categoryFilter;
      const matchesStyle = styleFilter === 'Всі' || p.style === styleFilter;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesStyle && matchesSearch;
    });
  }, [categoryFilter, styleFilter, searchQuery]);

  const handleFilterChange = (type: 'category' | 'style', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'Всі') {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-10 flex-shrink-0">
          <div className="flex items-center space-x-2 text-deep-slate border-b border-gold pb-4">
            <Filter size={20} className="text-gold" />
            <h2 className="text-xl font-bold uppercase tracking-widest font-playfair">Фільтри</h2>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Пошук</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Знайти меблі..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 px-4 py-3 pr-10 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all text-sm"
              />
              <Search className="absolute right-3 top-3 text-gray-400" size={18} />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Категорія</h3>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleFilterChange('category', 'Всі')}
                className={`text-left text-sm uppercase tracking-wider py-1 hover:text-gold transition-colors ${categoryFilter === 'Всі' ? 'text-gold font-bold border-l-2 border-gold pl-3' : 'text-gray-600 pl-3 border-l border-gray-100'}`}
              >
                Всі Категорії
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleFilterChange('category', cat.name)}
                  className={`text-left text-sm uppercase tracking-wider py-1 hover:text-gold transition-colors ${categoryFilter === cat.name ? 'text-gold font-bold border-l-2 border-gold pl-3' : 'text-gray-600 pl-3 border-l border-gray-100'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Стиль</h3>
            <div className="flex flex-wrap gap-2">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => handleFilterChange('style', style)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${styleFilter === style ? 'bg-gold border-gold text-white' : 'border-gray-200 text-gray-600 hover:border-gold hover:text-gold'}`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Показано <span className="text-deep-slate font-bold">{filteredProducts.length}</span> Товарів
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 uppercase tracking-widest cursor-pointer hover:text-gold">
              <SlidersHorizontal size={16} />
              <span>Сортувати: Типово</span>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6">
                    <Link to={`/catalog/${product.id}`}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </Link>
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-deep-slate">
                      {product.style}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(product);
                      }}
                      className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 ${isFavorite(product.id) ? 'bg-gold text-white' : 'bg-white text-deep-slate hover:bg-gold hover:text-white'}`}
                    >
                      <Heart size={18} className={isFavorite(product.id) ? "fill-white" : ""} />
                    </button>
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-deep-slate/80 to-transparent flex items-center justify-center space-x-4">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="px-6 py-3 bg-white text-deep-slate hover:bg-gold hover:text-white transition-colors duration-300 shadow-xl text-[10px] font-bold uppercase tracking-widest flex items-center space-x-2"
                      >
                        <ShoppingBag size={16} />
                        <span>Додати у кошик</span>
                      </button>
                    </div>
                  </div>
                  <Link to={`/catalog/${product.id}`} className="space-y-2">
                    <p className="text-xs text-gold uppercase tracking-[0.2em] font-semibold">{product.category}</p>
                    <h4 className="text-xl font-playfair font-bold text-deep-slate group-hover:text-gold transition-colors duration-300">{product.name}</h4>
                    <p className="text-lg font-bold text-deep-slate tracking-tighter">{product.price.toLocaleString()} грн.</p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-gray-400 uppercase tracking-widest">Товарів не знайдено</h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs">Спробуйте змінити фільтри або пошуковий запит.</p>
              <button 
                onClick={() => {
                  setSearchParams({});
                  setSearchQuery('');
                }}
                className="inline-block px-8 py-3 bg-deep-slate text-ivory text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-colors"
              >
                Скинути фільтри
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
