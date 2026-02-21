import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FavoritesDrawer: React.FC = () => {
  const { favorites, isFavoritesOpen, setIsFavoritesOpen, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {isFavoritesOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFavoritesOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-ivory z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gold/10 flex items-center justify-between bg-deep-slate text-ivory">
              <div className="flex items-center space-x-3">
                <Heart size={24} className="text-gold fill-gold" />
                <h2 className="text-xl font-playfair font-bold uppercase tracking-widest">Обране</h2>
              </div>
              <button
                onClick={() => setIsFavoritesOpen(false)}
                className="p-2 hover:rotate-90 transition-transform duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {favorites.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <Heart size={32} className="text-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-deep-slate font-bold uppercase tracking-widest">Список порожній</p>
                    <p className="text-gray-500 text-sm">Ви ще не додали жодного товару до обраного.</p>
                  </div>
                  <Link
                    to="/catalog"
                    onClick={() => setIsFavoritesOpen(false)}
                    className="px-8 py-4 bg-gold text-deep-slate text-xs font-bold uppercase tracking-widest hover:bg-deep-slate hover:text-white transition-all duration-500"
                  >
                    Перейти до каталогу
                  </Link>
                </div>
              ) : (
                favorites.map((product) => (
                  <div key={product.id} className="flex space-x-4 bg-white p-4 shadow-sm border border-gray-100 group">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-bold text-deep-slate uppercase tracking-wider line-clamp-1">
                            {product.name}
                          </h3>
                          <button
                            onClick={() => toggleFavorite(product)}
                            className="text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{product.category}</p>
                        <p className="text-gold font-bold mt-2 font-lato">{product.price.toLocaleString()} ₴</p>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(product);
                          setIsFavoritesOpen(false);
                        }}
                        className="mt-3 flex items-center justify-center space-x-2 w-full py-2 bg-deep-slate text-ivory text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-deep-slate transition-all duration-300"
                      >
                        <ShoppingBag size={14} />
                        <span>У кошик</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FavoritesDrawer;
