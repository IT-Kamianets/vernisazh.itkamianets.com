import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, Product, categories } from '../data/db';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.style.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-deep-slate/95 backdrop-blur-xl flex flex-col"
        >
          {/* Header */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
            <div className="text-ivory font-playfair italic text-xl tracking-widest">Вернісаж</div>
            <button 
              onClick={onClose}
              className="text-ivory hover:opacity-70 transition-all duration-500 hover:rotate-90 p-2"
            >
              <X size={32} />
            </button>
          </div>

          <div className="max-w-4xl mx-auto w-full px-4 flex-1 flex flex-col pt-12">
            {/* Search Input Area */}
            <div className="space-y-4 mb-16">
              <h2 className="text-ivory/60 text-[10px] font-bold uppercase tracking-[0.5em] text-center mb-6">Пошук По Всьому Сайту</h2>
              <div className="relative group max-w-2xl mx-auto w-full">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Що ви шукаєте?"
                  className="w-full bg-white/5 border border-white/10 px-8 py-6 pr-16 focus:ring-1 focus:ring-ivory focus:border-ivory outline-none transition-all text-2xl md:text-3xl font-playfair text-ivory placeholder:text-ivory/20 shadow-2xl backdrop-blur-sm"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-ivory group-focus-within:scale-110 transition-transform duration-500" size={28} />
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar pb-20">
              <AnimatePresence mode="wait">
                {query.trim().length > 1 ? (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8"
                  >
                    {results.length > 0 ? (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <h3 className="text-ivory uppercase tracking-[0.3em] text-[10px] font-bold">Знайдені Шедеври</h3>
                          <span className="text-ivory/20 text-[10px] uppercase tracking-widest">{results.length} результати</span>
                        </div>
                        <div className="grid gap-4">
                          {results.map((product, idx) => (
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              key={product.id}
                            >
                              <Link 
                                to={`/catalog/${product.id}`}
                                onClick={onClose}
                                className="flex items-center space-x-6 group/item bg-white/[0.02] p-4 hover:bg-white/[0.08] transition-all border border-white/5 hover:border-white/30"
                              >
                                <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-ivory/60 text-[10px] uppercase tracking-[0.2em] mb-1">{product.category}</p>
                                  <h4 className="text-ivory font-playfair text-xl group-hover/item:text-white transition-colors">{product.name}</h4>
                                  <p className="text-ivory/40 text-sm mt-1">{product.price.toLocaleString()} ₴</p>
                                </div>
                                <ArrowRight className="text-ivory/10 group-hover/item:text-white group-hover/item:translate-x-2 transition-all" size={20} />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-20">
                        <p className="text-ivory/40 uppercase tracking-[0.3em] text-sm">На жаль, за цим запитом нічого не знайдено</p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="categories"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-10"
                  >
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="text-ivory uppercase tracking-[0.3em] text-[10px] font-bold">Популярні Категорії</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {categories.map((cat, idx) => (
                        <motion.div
                          key={cat.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Link
                            to={`/catalog?category=${cat.name}`}
                            onClick={onClose}
                            className="relative group block aspect-[4/5] overflow-hidden border border-white/10"
                          >
                            <img 
                              src={cat.image} 
                              alt={cat.name} 
                              className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                              <span className="text-ivory text-xs uppercase tracking-[0.3em] font-bold border-b border-white/0 group-hover:border-white/100 pb-1 transition-all duration-500">
                                {cat.name}
                              </span>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
