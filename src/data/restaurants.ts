import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: '鮮烘焙坊',
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877',
    rating: 4.8,
    reviewCount: 234,
    cuisine: '麵包糕點',
    address: '市中心大道123號',
    packages: [
      {
        id: 'p1',
        name: '晚間麵包禮盒',
        originalPrice: 25,
        discountedPrice: 8,
        description: '當日新鮮烘焙的精選麵包和糕點',
        availableUntil: '21:00',
        quantity: 5
      }
    ]
  },
  {
    id: '2',
    name: '壽司職人',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    rating: 4.6,
    reviewCount: 156,
    cuisine: '日本料理',
    address: '西區榆樹街456號',
    packages: [
      {
        id: 'p2',
        name: '特選握壽司拼盤',
        originalPrice: 40,
        discountedPrice: 15,
        description: '當日製作的精緻握壽司',
        availableUntil: '22:00',
        quantity: 3
      }
    ]
  },
  {
    id: '3',
    name: '綠園美食',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    rating: 4.5,
    reviewCount: 178,
    cuisine: '港式餐點',
    address: '東區橡樹街789號',
    packages: [
      {
        id: 'p3',
        name: '招牌便當套餐',
        originalPrice: 20,
        discountedPrice: 7,
        description: '使用新鮮食材製作的特色便當',
        availableUntil: '19:30',
        quantity: 4
      }
    ]
  },
  {
    id: '4',
    name: '義式廚房',
    image: 'https://images.unsplash.com/photo-1498579397066-22750a3cb424',
    rating: 4.7,
    reviewCount: 312,
    cuisine: '義大利料理',
    address: '北區松樹街101號',
    packages: [
      {
        id: 'p4',
        name: '手工披薩套餐',
        originalPrice: 35,
        discountedPrice: 12,
        description: '現烤手工披薩配特製沙拉',
        availableUntil: '21:30',
        quantity: 6
      }
    ]
  },
  {
    id: '5',
    name: '甜點天地',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
    rating: 4.9,
    reviewCount: 423,
    cuisine: '甜點',
    address: '南區楓樹街202號',
    packages: [
      {
        id: 'p5',
        name: '精選甜點組合',
        originalPrice: 30,
        discountedPrice: 10,
        description: '主廚特選當日甜點拼盤',
        availableUntil: '20:00',
        quantity: 8
      }
    ]
  },
  {
    id: '6',
    name: '泰式風味',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
    rating: 4.4,
    reviewCount: 167,
    cuisine: '泰國料理',
    address: '西區柏樹街303號',
    packages: [
      {
        id: 'p6',
        name: '泰式料理套餐',
        originalPrice: 28,
        discountedPrice: 9,
        description: '泰式咖哩配香米飯',
        availableUntil: '20:30',
        quantity: 5
      }
    ]
  },
  {
    id: '7',
    name: '健康蔬食',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    rating: 4.6,
    reviewCount: 245,
    cuisine: '素食',
    address: '東區杉樹街404號',
    packages: [
      {
        id: 'p7',
        name: '有機蔬食便當',
        originalPrice: 22,
        discountedPrice: 8,
        description: '當季有機蔬菜配全穀飯',
        availableUntil: '19:00',
        quantity: 7
      }
    ]
  },
  {
    id: '8',
    name: '韓式料理',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9',
    rating: 4.7,
    reviewCount: 289,
    cuisine: '韓國料理',
    address: '北區柳樹街505號',
    packages: [
      {
        id: 'p8',
        name: '韓式烤肉套餐',
        originalPrice: 45,
        discountedPrice: 15,
        description: '精選韓式烤肉配小菜',
        availableUntil: '21:00',
        quantity: 4
      }
    ]
  },
  {
    id: '9',
    name: '海鮮市集',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a',
    rating: 4.8,
    reviewCount: 334,
    cuisine: '海鮮',
    address: '南區椰樹街606號',
    packages: [
      {
        id: 'p9',
        name: '新鮮海鮮拼盤',
        originalPrice: 50,
        discountedPrice: 18,
        description: '當日捕撈海鮮特選',
        availableUntil: '20:30',
        quantity: 3
      }
    ]
  },
  {
    id: '10',
    name: '法式餐館',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    rating: 4.9,
    reviewCount: 456,
    cuisine: '法國料理',
    address: '西區松樹街707號',
    packages: [
      {
        id: 'p10',
        name: '法式晚餐套餐',
        originalPrice: 55,
        discountedPrice: 20,
        description: '主廚特製法式料理',
        availableUntil: '21:30',
        quantity: 2
      }
    ]
  },
  {
    id: '11',
    name: '印度風味',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
    rating: 4.6,
    reviewCount: 198,
    cuisine: '印度料理',
    address: '東區樺樹街808號',
    packages: [
      {
        id: 'p11',
        name: '咖哩套餐',
        originalPrice: 32,
        discountedPrice: 11,
        description: '印度咖哩配烤餅',
        availableUntil: '20:00',
        quantity: 6
      }
    ]
  },
  {
    id: '12',
    name: '越南小館',
    image: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f',
    rating: 4.5,
    reviewCount: 167,
    cuisine: '越南料理',
    address: '北區楓樹街909號',
    packages: [
      {
        id: 'p12',
        name: '越式河粉套餐',
        originalPrice: 25,
        discountedPrice: 8,
        description: '傳統越式河粉配春捲',
        availableUntil: '19:30',
        quantity: 5
      }
    ]
  }
];