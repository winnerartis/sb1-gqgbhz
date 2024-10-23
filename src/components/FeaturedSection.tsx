import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Restaurant } from '../types';
import RestaurantCard from './RestaurantCard';

interface Props {
  restaurants: Restaurant[];
  onRestaurantClick: (id: string) => void;
}

export default function FeaturedSection({ restaurants, onRestaurantClick }: Props) {
  const { t } = useLanguage();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('featuredDeals')}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={onRestaurantClick}
            featured
          />
        ))}
      </div>
    </section>
  );
}