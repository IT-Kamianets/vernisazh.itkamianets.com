import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { name: 'Головна', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'Про нас', path: '/about' },
    { name: 'Контакти', path: '/contacts' },
  ];

  const activeStyle = "text-gold border-b-2 border-gold pb-1";
  const inactiveStyle = "text-deep-slate hover:text-gold transition-colors duration-300";

  return (
    <nav className="bg-white/95 text-deep-slate sticky top-0 z-50 shadow-sm border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-16 w-auto" src="/logo.png" alt="Вернісаж" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 uppercase text-sm tracking-widest font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:text-gold transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-gold transition-colors relative"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gold"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center uppercase tracking-widest">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-3 py-4 text-base font-medium ${isActive ? 'text-gold' : 'hover:text-gold'}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
