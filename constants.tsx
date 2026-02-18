
import { MenuItem, Review, CafeInfo } from './types.ts';

export const CAFE_INFO: CafeInfo = {
  name: "A1cafe",
  address: "Hayer Market, Main Road, Ramsinghpur, Rajasthan 335703",
  phone: "73575 76969",
  rating: 4.86,
  totalReviews: 142,
  hours: "10:00 AM - 10:30 PM (Last Order)"
};

export const MENU_ITEMS: MenuItem[] = [
  // PIZZAS
  {
    id: 'p1',
    name: 'A-One Special Pizza',
    description: 'Onion, Tomato, Capsicum, Paneer, Mushroom, Jalapeños, Black Olive, Red Paprika, Baby Corn.',
    price: '₹249',
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    popular: true
  },
  {
    id: 'p2',
    name: 'Cheese Burst Pizza',
    description: 'Double Cheese + Loaded Paneer + Olive + Tomato.',
    price: '₹239',
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600',
    popular: true
  },
  {
    id: 'p3',
    name: 'Lover\' Bite Pizza',
    description: 'Onion, Tomato, Capsicum, and Sweet Corn.',
    price: '₹199',
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1574129810534-746974fb6856?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p4',
    name: 'HOT\'s Sweet Pizza',
    description: 'Onion, Corn, Baby Corn, Pineapple, and Paneer.',
    price: '₹229',
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p5',
    name: 'Margherita',
    description: 'Classic cheese pizza with fresh tomato sauce.',
    price: '₹139',
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=600'
  },

  // BURGERS
  {
    id: 'b1',
    name: 'Maharaja Burger',
    description: 'Our biggest, multi-layered signature burger.',
    price: '₹109',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    popular: true
  },
  {
    id: 'b2',
    name: 'Paneer Burger',
    description: 'Crispy paneer patty with fresh toppings.',
    price: '₹89',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b3',
    name: 'Mexican Burger',
    description: 'Spicy salsa and jalapeños for a Mexican twist.',
    price: '₹79',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1582196016295-f8c499b33d1f?auto=format&fit=crop&q=80&w=600'
  },

  // SANDWICHES & SUBS
  {
    id: 's1',
    name: 'A-1 Special Sandwich',
    description: 'Chef\'s special loaded club sandwich.',
    price: '₹129',
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600',
    popular: true
  },
  {
    id: 's2',
    name: 'Exotic-Sub',
    description: 'Premium sub loaded with fresh exotic vegetables.',
    price: '₹139',
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1537213333271-81789c562766?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's3',
    name: 'Grilled Sandwich',
    description: 'Perfectly toasted sandwich with cheese and veggies.',
    price: '₹79',
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&q=80&w=600'
  },

  // CHINESE & MAGGI
  {
    id: 'c1',
    name: 'Paneer Chilly',
    description: 'Classic Indo-Chinese paneer in spicy gravy or dry.',
    price: '₹179',
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c2',
    name: 'Hakka Noodles',
    description: 'Traditional stir-fried noodles with crisp veggies.',
    price: '₹99',
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c3',
    name: 'Paneer Maggi',
    description: 'Comforting Maggi noodles tossed with soft paneer cubes.',
    price: '₹119',
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600'
  },

  // PASTA & CHAAP
  {
    id: 'pa1',
    name: 'White Sauce Pasta',
    description: 'Creamy and rich pasta with Italian herbs.',
    price: '₹119',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1645112481355-f55928d3f663?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ch1',
    name: 'Malai Chaap',
    description: 'Succulent soy chaap marinated in creamy malai.',
    price: '₹179',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=600'
  },

  // SNACKS & SIDES
  {
    id: 'sn1',
    name: 'Peri Peri Fry',
    description: 'Crispy fries with a spicy peri-peri dusting.',
    price: '₹89',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sn2',
    name: 'KFC Paneer',
    description: 'Extra crispy fried paneer bites.',
    price: '₹179',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600'
  },

  // DRINKS
  {
    id: 'd1',
    name: 'Mint Mojito',
    description: 'Refreshing mint and lime mocktail.',
    price: '₹99',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'd2',
    name: 'Kit Kat Shake',
    description: 'Thick creamy shake blended with Kit Kat pieces.',
    price: '₹99',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'd3',
    name: 'Cold Coffee',
    description: 'Perfectly brewed cold coffee with chocolate syrup.',
    price: '₹79',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Harjot Cheema',
    rating: 5,
    text: 'Good service, great food. Definitely the best spot in Ramsinghpur for a quick bite.',
    date: '2 months ago'
  },
  {
    id: 'r2',
    author: 'Poonam Poonam',
    rating: 5,
    text: 'Good experience 😃😁😃😁. The vibe is amazing and the staff is very polite.',
    date: '3 weeks ago'
  },
  {
    id: 'r3',
    author: 'Amit Singh',
    rating: 4,
    text: 'Love the Farmhouse Pizza. Great value for money!',
    date: '1 week ago'
  }
];
