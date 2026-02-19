import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const translatePath = (path: string) => {
    const translations: { [key: string]: string } = {
      'catalog': 'Каталог',
      'about': 'Про нас',
      'contacts': 'Контакти'
    };
    return translations[path] || path;
  };

  return (
    <nav className="flex px-4 sm:px-6 lg:px-8 py-4 bg-transparent max-w-7xl mx-auto" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm font-medium uppercase tracking-widest text-gray-500">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center hover:text-gold transition-colors duration-300">
            <Home className="w-4 h-4 mr-2" />
            Головна
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                {last ? (
                  <span className="text-gold font-semibold" aria-current="page">
                    {translatePath(value.replace(/-/g, ' '))}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-gold transition-colors duration-300">
                    {translatePath(value.replace(/-/g, ' '))}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
