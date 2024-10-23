import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import { Restaurant } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  restaurant: Restaurant;
  onClick: (id: string) => void;
}

export default function RestaurantCard({ restaurant, onClick }: Props) {
  const { t } = useLanguage();

  return (
    <div 
      onClick={() => onClick(restaurant.id)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
    >
      <div className="relative h-48">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{restaurant.name}</h3>
          <div className="flex items-center text-white/90 text-sm mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{restaurant.cuisine}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{restaurant.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({restaurant.reviewCount} {t('reviews')})</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{restaurant.address}</p>
        
        {restaurant.packages.map(pkg => (
          <div key={pkg.id} className="mt-2 p-3 bg-green-50 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium text-green-800">{pkg.name}</span>
                <p className="text-sm text-gray-600 mt-1">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {t('availableUntil')} {pkg.availableUntil}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm line-through text-gray-500">${pkg.originalPrice}</p>
                <p className="font-bold text-green-600">${pkg.discountedPrice}</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                {pkg.quantity} {t('left')}
              </span>
              <button className="btn-primary text-sm">
                {t('orderNow')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}