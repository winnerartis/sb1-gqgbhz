import React, { useState } from 'react';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import FilterBar from './components/FilterBar';
import RestaurantCard from './components/RestaurantCard';
import FeaturedSection from './components/FeaturedSection';
import PopularSection from './components/PopularSection';
import { restaurants } from './data/restaurants';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';

function MainContent() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleRestaurantClick = (id: string) => {
    setSelectedRestaurant(id);
    alert('In a complete implementation, this would open the restaurant detail page');
  };

  // Split restaurants into featured and regular sections
  const featuredRestaurants = restaurants.slice(0, 3);
  const popularRestaurants = restaurants.slice(3, 7);
  const regularRestaurants = restaurants.slice(7);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryBar />
      <FilterBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FeaturedSection 
          restaurants={featuredRestaurants} 
          onRestaurantClick={handleRestaurantClick}
        />
        
        <PopularSection 
          restaurants={popularRestaurants}
          onRestaurantClick={handleRestaurantClick}
        />

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('allRestaurants')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularRestaurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onClick={handleRestaurantClick}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;