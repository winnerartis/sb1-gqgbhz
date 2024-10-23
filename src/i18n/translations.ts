export const translations = {
  zh: {
    appName: '省食多多',
    searchPlaceholder: '搜尋餐廳或美食類型...',
    headerTitle: '省食省錢',
    headerSubtitle: '發現並預訂附近餐廳的特惠美食',
    availableUntil: '供應至',
    reviews: '則評價',
    left: '份剩餘',
    profile: '個人中心',
    distance: '距離',
    orderNow: '立即預訂',
    categories: '分類',
    filters: '篩選',
    pickupTime: '取餐時間',
    allCategories: '全部',
    bakery: '麵包糕點',
    restaurant: '餐廳',
    cafe: '咖啡廳',
    dessert: '甜點',
    grocery: '雜貨',
    convenience: '便利商店',
    sortBy: '排序方式',
    featuredDeals: '精選特惠',
    popularNearby: '熱門餐廳',
    allRestaurants: '所有餐廳'
  },
  en: {
    appName: 'SavedPlate',
    searchPlaceholder: 'Search restaurants or cuisines...',
    headerTitle: 'Save Food, Save Money',
    headerSubtitle: 'Discover and reserve discounted meals from restaurants near you',
    availableUntil: 'Available until',
    reviews: 'reviews',
    left: 'left',
    profile: 'Profile',
    distance: 'Distance',
    orderNow: 'Order Now',
    categories: 'Categories',
    filters: 'Filters',
    pickupTime: 'Pickup Time',
    allCategories: 'All',
    bakery: 'Bakery',
    restaurant: 'Restaurant',
    cafe: 'Cafe',
    dessert: 'Dessert',
    grocery: 'Grocery',
    convenience: 'Convenience Store',
    sortBy: 'Sort by',
    featuredDeals: 'Featured Deals',
    popularNearby: 'Popular Nearby',
    allRestaurants: 'All Restaurants'
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;