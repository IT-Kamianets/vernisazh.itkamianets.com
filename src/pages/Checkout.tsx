import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, CreditCard, Truck, User, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    paymentMethod: 'card'
  });

  if (cart.length === 0 && !isOrdered) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-8">
        <h2 className="text-4xl font-playfair font-bold text-deep-slate uppercase tracking-widest">Кошик порожній</h2>
        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs">Ви не можете оформити замовлення без товарів.</p>
        <Link to="/catalog" className="inline-block px-10 py-4 bg-deep-slate text-ivory text-sm uppercase tracking-widest font-bold hover:bg-gold transition-colors">
          До каталогу
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally send data to an API
    setIsOrdered(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (isOrdered) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-4 py-32 text-center space-y-10"
      >
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-2xl">
            <CheckCircle2 size={48} className="text-deep-slate" />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-deep-slate uppercase tracking-wider">Дякуємо за замовлення!</h2>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm leading-loose">
            Ваше замовлення успішно прийняте. <br />
            Наш менеджер зв'яжеться з вами найближчим часом для уточнення деталей доставки.
          </p>
        </div>
        <div className="pt-10">
          <Link to="/" className="px-12 py-5 bg-deep-slate text-ivory text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500 shadow-xl">
            Повернутися на головну
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <Link to="/catalog" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gold transition-colors group">
          <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Повернутися до покупок
        </Link>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-deep-slate mt-6 uppercase tracking-wider">Оформлення замовлення</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-16">
        {/* Checkout Form */}
        <div className="flex-1 space-y-12">
          {/* Contact Information */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 border-b border-gold/20 pb-4">
              <User className="text-gold" size={24} />
              <h2 className="text-xl font-playfair font-bold uppercase tracking-widest text-deep-slate">Контактні дані</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Ім'я</label>
                <input 
                  required
                  type="text" 
                  className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light"
                  placeholder="Ваше ім'я"
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Прізвище</label>
                <input 
                  required
                  type="text" 
                  className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light"
                  placeholder="Ваше прізвище"
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Телефон</label>
                <div className="relative">
                  <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                  <input 
                    required
                    type="tel" 
                    className="w-full border-b border-gray-200 py-3 pl-8 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light"
                    placeholder="+380"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email</label>
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                  <input 
                    required
                    type="email" 
                    className="w-full border-b border-gray-200 py-3 pl-8 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light"
                    placeholder="example@mail.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Details */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 border-b border-gold/20 pb-4">
              <Truck className="text-gold" size={24} />
              <h2 className="text-xl font-playfair font-bold uppercase tracking-widest text-deep-slate">Доставка</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Місто</label>
                <input 
                  required
                  type="text" 
                  className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light"
                  placeholder="Ваше місто"
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Адреса або № Відділення</label>
                <div className="relative">
                  <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                  <input 
                    required
                    type="text" 
                    className="w-full border-b border-gray-200 py-3 pl-8 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light"
                    placeholder="Вулиця, будинок..."
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 border-b border-gold/20 pb-4">
              <CreditCard className="text-gold" size={24} />
              <h2 className="text-xl font-playfair font-bold uppercase tracking-widest text-deep-slate">Спосіб оплати</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={`flex items-center justify-between p-6 border cursor-pointer transition-all ${formData.paymentMethod === 'card' ? 'border-gold bg-gold/5' : 'border-gray-100 hover:border-gold/50'}`}>
                <div className="flex items-center space-x-4">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={formData.paymentMethod === 'card'} 
                    onChange={() => setFormData({...formData, paymentMethod: 'card'})}
                    className="accent-gold"
                  />
                  <span className="text-xs font-bold uppercase tracking-widest text-deep-slate">Карткою онлайн</span>
                </div>
                <CreditCard size={20} className="text-gold" />
              </label>
              <label className={`flex items-center justify-between p-6 border cursor-pointer transition-all ${formData.paymentMethod === 'cash' ? 'border-gold bg-gold/5' : 'border-gray-100 hover:border-gold/50'}`}>
                <div className="flex items-center space-x-4">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={formData.paymentMethod === 'cash'}
                    onChange={() => setFormData({...formData, paymentMethod: 'cash'})}
                    className="accent-gold"
                  />
                  <span className="text-xs font-bold uppercase tracking-widest text-deep-slate">При отриманні</span>
                </div>
                <Truck size={20} className="text-gold" />
              </label>
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96">
          <div className="bg-ivory p-8 border border-gold/10 sticky top-32 space-y-8 shadow-xl">
            <h2 className="text-xl font-playfair font-bold uppercase tracking-widest text-deep-slate border-b border-gold/20 pb-4">Ваше замовлення</h2>
            
            <div className="space-y-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-white">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-deep-slate line-clamp-1">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] text-gray-500">{item.quantity} шт.</p>
                      <p className="text-xs font-bold text-gold">{(item.price * item.quantity).toLocaleString()} ₴</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-gold/20">
              <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                <span>Сума</span>
                <span>{totalPrice.toLocaleString()} ₴</span>
              </div>
              <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                <span>Доставка</span>
                <span className="text-gold">Безкоштовно</span>
              </div>
              <div className="flex justify-between text-lg font-playfair font-bold uppercase tracking-widest text-deep-slate pt-2">
                <span>Разом</span>
                <span>{totalPrice.toLocaleString()} ₴</span>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-deep-slate text-ivory text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-deep-slate transition-all duration-500 shadow-xl"
            >
              Підтвердити замовлення
            </button>
            
            <p className="text-[8px] text-center text-gray-400 uppercase tracking-widest leading-loose">
              Натискаючи кнопку "Підтвердити замовлення", ви погоджуєтесь з умовами публічної оферти та обробки персональних даних.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
