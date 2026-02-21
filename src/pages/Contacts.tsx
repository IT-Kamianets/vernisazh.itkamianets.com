import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contacts: React.FC = () => {
  return (
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-gold uppercase tracking-[0.3em] font-semibold text-sm mb-6">Контакти</h2>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-deep-slate mb-8 tracking-wider uppercase leading-tight">Будьмо на зв'язку</h1>
          <p className="text-gray-500 font-light leading-relaxed tracking-wide text-lg uppercase">
            Обговорімо, як ми можемо допомогти вам створити ідеальний житловий простір.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Contact Info */}
          <div className="w-full lg:w-2/5 space-y-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-white shadow-xl text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-deep-slate">Розташування Шоуруму</h3>
                  <p className="text-gray-500 uppercase tracking-widest text-xs leading-loose">
                    вул. Лесі Українки, 40-42, <br />
                    м. Кам‘янець-Подільський, Україна
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-white shadow-xl text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-deep-slate">Телефонна Підтримка</h3>
                  <p className="text-gray-500 uppercase tracking-widest text-xs leading-loose">
                    +380 (68) 075 25 75 <br />
                    +380 (96) 462 03 56 <br />
                    +380 (99) 181 65 36
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-white shadow-xl text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-deep-slate">Онлайн Запити</h3>
                  <p className="text-gray-500 uppercase tracking-widest text-xs leading-loose">
                    contact@vernissage-itk.com <br />
                    design@vernissage-itk.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-deep-slate text-ivory space-y-8 shadow-2xl">
              <h3 className="text-xl font-playfair font-bold uppercase tracking-widest text-gold">Графік Роботи</h3>
              <div className="space-y-4 text-xs uppercase tracking-[0.2em] font-light">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Понеділок - П'ятниця</span>
                  <span className="text-gold">10:00 - 19:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Субота</span>
                  <span className="text-gold">11:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Неділя</span>
                  <span className="text-gray-500">Вихідний</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 pt-4">
              <a href="https://www.instagram.com/salon_mebli_/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-deep-slate hover:bg-gold hover:text-white transition-all duration-300 shadow-md">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100070359290567" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-deep-slate hover:bg-gold hover:text-white transition-all duration-300 shadow-md">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5 bg-white p-10 md:p-16 shadow-2xl space-y-12">
            <h3 className="text-2xl font-playfair font-bold uppercase tracking-widest text-deep-slate">Напишіть Нам</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">Ваше Прізвище та Ім'я</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-200 py-4 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light"
                    placeholder="Введіть ім'я..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">Електронна Пошта</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-gray-200 py-4 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light"
                    placeholder="Введіть email..."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">Тема Звернення</label>
                <select className="w-full border-b border-gray-200 py-4 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light bg-transparent">
                  <option>Загальний запит</option>
                  <option>Індивідуальне замовлення</option>
                  <option>Консультація дизайнера</option>
                  <option>Відгук</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">Ваше Повідомлення</label>
                <textarea 
                  rows={4}
                  className="w-full border-b border-gray-200 py-4 focus:border-gold outline-none transition-colors text-sm uppercase tracking-widest font-light resize-none"
                  placeholder="Чим ми можемо допомогти?"
                />
              </div>
              <button className="inline-flex items-center space-x-4 px-12 py-5 bg-gold text-deep-slate text-sm font-bold uppercase tracking-[0.3em] hover:bg-deep-slate hover:text-white transition-all duration-500 shadow-xl group">
                <span>Надіслати Повідомлення</span>
                <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-gray-200 mt-12 grayscale overflow-hidden relative group">
        <div className="absolute inset-0 bg-deep-slate/10 group-hover:bg-transparent transition-colors duration-1000"></div>
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
          alt="Вигляд на карті" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <div className="p-6 bg-white shadow-2xl mb-4 relative z-10">
            <MapPin size={32} className="text-gold animate-bounce" />
          </div>
          <p className="bg-deep-slate text-ivory px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-lg">
            Завітайте до нашого Шоуруму
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
