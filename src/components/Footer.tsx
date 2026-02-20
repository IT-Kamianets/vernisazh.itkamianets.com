import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-slate text-ivory pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-playfair font-bold text-gold tracking-widest uppercase">
            ВЕРНІСАЖ
          </h2>
          <p className="text-ivory/80 text-sm leading-relaxed max-w-xs">
            Відчуйте мистецтво життя з нашою курованою колекцією розкішних меблів. Виготовлені вручну до досконалості, створені для позачасової елегантності.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold uppercase tracking-widest text-gold font-playfair">
            Швидкі посилання
          </h3>
          <ul className="space-y-4 text-sm text-ivory/80">
            <li>
              <Link to="/" className="hover:text-gold transition-colors duration-300">Головна</Link>
            </li>
            <li>
              <Link to="/catalog" className="hover:text-gold transition-colors duration-300">Каталог</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold transition-colors duration-300">Про нас</Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-gold transition-colors duration-300">Контакти</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold uppercase tracking-widest text-gold font-playfair">
            Категорії
          </h3>
          <ul className="space-y-4 text-sm text-ivory/80">
            <li>
              <Link to="/catalog?category=Вітальня" className="hover:text-gold transition-colors duration-300">Вітальня</Link>
            </li>
            <li>
              <Link to="/catalog?category=Спальня" className="hover:text-gold transition-colors duration-300">Спальня</Link>
            </li>
            <li>
              <Link to="/catalog?category=Їдальня" className="hover:text-gold transition-colors duration-300">Їдальня</Link>
            </li>
            <li>
              <Link to="/catalog?category=Кабінет" className="hover:text-gold transition-colors duration-300">Кабінет</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold uppercase tracking-widest text-gold font-playfair">
            Контакти
          </h3>
          <ul className="space-y-4 text-sm text-ivory/80">
            <li className="flex items-center space-x-3">
              <MapPin size={18} className="text-gold" />
              <span>Троїцька площа, 1, Кам'янець-Подільський</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold" />
              <span>+380 98 123 4567</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold" />
              <span>contact@vernissage-itk.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-xs text-ivory/60 uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} Меблевий салон "Вернісаж". Всі права захищені.
      </div>
    </footer>
  );
};

export default Footer;
