import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="text-gold" size={24} />
                <h2 className="text-xl font-playfair font-bold text-deep-slate uppercase tracking-wider">
                  Ваш Кошик ({totalItems})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-deep-slate" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                    <ShoppingBag size={40} />
                  </div>
                  <p className="text-gray-500 font-light">Ваш кошик поки що порожній.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-3 bg-deep-slate text-white text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-500"
                  >
                    Почати покупки
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex space-x-4 border-b border-gray-50 pb-6 last:border-0">
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-50 overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-playfair font-bold text-deep-slate text-sm uppercase">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">
                        {item.category}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-gray-100 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-50"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-50"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-bold text-gold text-sm">
                          {(item.price * item.quantity).toLocaleString()} ₴
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                <div className="flex justify-between items-center text-deep-slate uppercase tracking-widest text-sm font-bold">
                  <span>Всього</span>
                  <span className="text-xl font-playfair">{totalPrice.toLocaleString()} ₴</span>
                </div>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] text-center">
                  Податки та доставка розраховуються при оформленні.
                </p>
                <button
                  className="w-full py-4 bg-deep-slate text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 shadow-xl"
                  onClick={() => alert('Оформлення замовлення поки що не реалізоване.')}
                >
                  Оформити Замовлення
                </button>
                <Link
                  to="/catalog"
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center text-[10px] text-gray-400 uppercase tracking-widest hover:text-deep-slate transition-colors"
                >
                  Продовжити покупки
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
