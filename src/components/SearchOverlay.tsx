import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, Product } from '../data/db';
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
          className="fixed inset-0 z-[60] bg-deep-slate/95 backdrop-blur-md flex flex-col"
        >
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex justify-end">
            <button 
              onClick={onClose}
              className="text-ivory hover:text-gold transition-colors p-2"
            >
              <X size={32} />
            </button>
          </div>

          <div className="max-w-3xl mx-auto w-full px-4 flex-1 flex flex-col pt-20">
            <div className="relative group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gold" size={28} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Шукати меблі..."
                className="w-full bg-transparent border-b-2 border-ivory/20 py-6 pl-12 pr-4 text-3xl md:text-5xl font-playfair text-ivory outline-none focus:border-gold transition-colors placeholder:text-ivory/20"
              />
            </div>

            <div className="mt-12 space-y-8 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
              {results.length > 0 ? (
                <div className="space-y-6">
                  <h3 className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Знайдені товари</h3>
                  <div className="grid gap-6">
                    {results.map((product) => (
                      <Link 
                        key={product.id} 
                        to={`/catalog/${product.id}`}
                        onClick={onClose}
                        className="flex items-center space-x-6 group/item bg-white/5 p-4 hover:bg-white/10 transition-all border border-white/5"
                      >
                        <div className="w-20 h-20 flex-shrink-0">
                          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-ivory font-playfair text-xl group-hover/item:text-gold transition-colors">{product.name}</h4>
                          <p className="text-ivory/40 text-xs uppercase tracking-widest mt-1">{product.category} | {product.style}</p>
                        </div>
                        <ArrowRight className="text-ivory/20 group-hover/item:text-gold group-hover/item:translate-x-2 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : query.trim().length > 1 ? (
                <p className="text-ivory/40 text-center py-10 uppercase tracking-widest text-sm">Нічого не знайдено за вашим запитом</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Вітальня', 'Спальня', 'Їдальня', 'Кабінет'].map((cat) => (
                    <Link
                      key={cat}
                      to={`/catalog?category=${cat}`}
                      onClick={onClose}
                      className="border border-ivory/10 p-6 text-center hover:border-gold hover:bg-gold/5 transition-all group"
                    >
                      <span className="text-ivory/60 group-hover:text-gold text-xs uppercase tracking-widest font-bold transition-colors">{cat}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
