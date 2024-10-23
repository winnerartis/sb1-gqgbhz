export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  cuisine: string;
  address: string;
  packages: Package[];
}

export interface Package {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  availableUntil: string;
  quantity: number;
}

export interface Category {
  id: string;
  nameKey: TranslationKey;
}

export type TranslationKey = string;