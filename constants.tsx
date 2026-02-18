
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
  // TEA & COFFEE
  { id: 't1', name: 'Special Masala Tea', description: 'Our secret spiced milk tea.', price: '₹35', category: 'Beverages', image: 'https://images.unsplash.com/photo-1594631252845-29fc4586dc9c?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 't2', name: 'Ginger Tea', description: 'Fresh ginger infused wellness tea.', price: '₹30', category: 'Beverages', image: 'https://images.unsplash.com/photo-1563911191283-d48e7e721085?auto=format&fit=crop&q=80&w=400' },
  { id: 'c1', name: 'Cappuccino', description: 'Rich espresso with creamy foam.', price: '₹120', category: 'Beverages', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=400' },
  { id: 'c3', name: 'Hazelnut Cold Coffee', description: 'Nutty, sweet and ice cold.', price: '₹140', category: 'Beverages', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=400', popular: true },

  // SHAKES & MOCKTAILS
  { id: 'sh1', name: 'Oreo Blast Shake', description: 'Blended with real Oreo cookies.', price: '₹140', category: 'Beverages', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },
  { id: 'sh2', name: 'KitKat Thick Shake', description: 'Creamy chocolate with KitKat bits.', price: '₹150', category: 'Beverages', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'mk1', name: 'Virgin Mojito', description: 'Fresh mint and lime refresher.', price: '₹110', category: 'Beverages', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400' },

  // BURGERS & SANDWICHES
  { id: 'b1', name: 'Double Cheese Burger', description: 'Two layers of cheddar and a juicy patty.', price: '₹149', category: 'Burgers & Sandwiches', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'b2', name: 'Paneer Cheese Burger', description: 'Crispy paneer with melted cheese.', price: '₹139', category: 'Burgers & Sandwiches', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400' },
  { id: 'sw1', name: 'Cheese Chilli Sandwich', description: 'Spicy and cheesy grilled toast.', price: '₹120', category: 'Burgers & Sandwiches', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=400' },

  // PIZZAS
  { id: 'p1', name: 'Paneer Tikka Pizza', description: 'Tandoori paneer with bell peppers.', price: '₹249', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1574129810534-746974fb6856?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'p2', name: 'Farmhouse Special', description: 'Onion, capsicum, tomato and corn.', price: '₹229', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400' },
  { id: 'p3', name: 'Margherita Cheese Pizza', description: 'Pure mozzarella and basil sauce.', price: '₹179', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400' },

  // PASTA & CHINESE
  { id: 'pa1', name: 'White Sauce Pasta', description: 'Creamy bechamel with exotic veggies.', price: '₹189', category: 'Pasta & Chinese', image: 'https://images.unsplash.com/photo-1645112481355-f55928d3f663?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'n1', name: 'Schezwan Noodles', description: 'Spicy noodles with red Schezwan sauce.', price: '₹149', category: 'Pasta & Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400' },
  { id: 'm1', name: 'Cheese Masala Maggi', description: 'A1 special cheesy maggi noodles.', price: '₹99', category: 'Pasta & Chinese', image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400' },

  // SNACKS
  { id: 'mo1', name: 'Paneer Momos', description: 'Steamed dumplings with paneer stuffing.', price: '₹110', category: 'Snacks & Sides', image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b4?auto=format&fit=crop&q=80&w=400' },
  { id: 'fr1', name: 'Peri Peri Fries', description: 'Spicy dusted crispy fries.', price: '₹110', category: 'Snacks & Sides', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=400', popular: true },

  // DESSERTS
  { id: 'd1', name: 'Sizzling Brownie', description: 'With hot chocolate and vanilla scoop.', price: '₹190', category: 'Desserts', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=400', popular: true }
];

export const REVIEWS: Review[] = [
  { id: 'r1', author: 'Harjot Cheema', rating: 5, text: 'Good service, great food. Definitely the best spot in Ramsinghpur for a quick bite.', date: '2 months ago' },
  { id: 'r2', author: 'Poonam Poonam', rating: 5, text: 'Good experience 😃😁😃😁. The vibe is amazing and the staff is very polite.', date: '3 weeks ago' },
  { id: 'r3', author: 'Amit Singh', rating: 4, text: 'Love the Paneer Pizza. Great value for money!', date: '1 week ago' }
];
