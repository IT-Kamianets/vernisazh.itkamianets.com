import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/db';

interface FavoritesContextType {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  totalFavorites: number;
  isFavoritesOpen: boolean;
  setIsFavoritesOpen: (isOpen: boolean) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const saved = localStorage.getItem('vernissage-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('vernissage-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) => {
      const isAlreadyFav = prev.find((item) => item.id === product.id);
      if (isAlreadyFav) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isFavorite = (productId: string) => {
    return favorites.some((item) => item.id === productId);
  };

  const totalFavorites = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        totalFavorites,
        isFavoritesOpen,
        setIsFavoritesOpen,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
