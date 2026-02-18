
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
  // BEVERAGES - TEA & COFFEE
  { id: 't1', name: 'Masala Tea', description: 'Traditional Indian spiced tea.', price: '₹30', category: 'Beverages', image: 'https://images.unsplash.com/photo-1594631252845-29fc4586dc9c?auto=format&fit=crop&q=80&w=400' },
  { id: 't2', name: 'Elaichi Tea', description: 'Fragrant cardamom infused tea.', price: '₹30', category: 'Beverages', image: 'https://images.unsplash.com/photo-1563911191283-d48e7e721085?auto=format&fit=crop&q=80&w=400' },
  { id: 't3', name: 'Butter Tea', description: 'Special creamy butter tea.', price: '₹50', category: 'Beverages', image: 'https://images.unsplash.com/photo-1544787210-2218d60026e6?auto=format&fit=crop&q=80&w=400' },
  { id: 'c1', name: 'Cappuccino', description: 'Classic espresso with steamed milk foam.', price: '₹120', category: 'Beverages', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'c2', name: 'Hazelnut Cold Coffee', description: 'Smooth cold coffee with rich hazelnut notes.', price: '₹140', category: 'Beverages', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=400' },
  { id: 'j1', name: 'Fresh Orange Juice', description: '100% pure squeezed oranges.', price: '₹90', category: 'Beverages', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400' },
  { id: 'm1', name: 'Blue Lagoon Mocktail', description: 'Electric blue citrus refreshment.', price: '₹130', category: 'Beverages', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400' },
  { id: 'sh1', name: 'KitKat Shake', description: 'Thick shake with KitKat chunks.', price: '₹140', category: 'Beverages', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400', popular: true },

  // BURGERS & SANDWICHES
  { id: 'b1', name: 'Double Cheese Burger', description: 'Stacked with extra cheddar and veggie patty.', price: '₹149', category: 'Burgers & Sandwiches', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'b2', name: 'Paneer Burger', description: 'Crispy paneer block with secret mayo.', price: '₹119', category: 'Burgers & Sandwiches', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400' },
  { id: 'sw1', name: 'Club Sandwich', description: 'Three layered sandwich with fresh veggies.', price: '₹159', category: 'Burgers & Sandwiches', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=400' },
  { id: 'wr1', name: 'Veg Frankie', description: 'Spicy veg roll with onions and chutney.', price: '₹99', category: 'Burgers & Sandwiches', image: 'https://images.unsplash.com/photo-1626700051175-656a433b112d?auto=format&fit=crop&q=80&w=400' },

  // PIZZAS
  { id: 'p1', name: 'Mix Veg Pizza', description: 'Loaded with onion, capsicum, tomato, and corn.', price: '₹229', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'p2', name: 'Paneer Pizza', description: 'Succulent paneer cubes with mozarella.', price: '₹249', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1574129810534-746974fb6856?auto=format&fit=crop&q=80&w=400' },
  { id: 'p3', name: 'Plain Cheese Pizza', description: 'Just pure melted mozarella and sauce.', price: '₹169', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400' },

  // PASTA & CHINESE
  { id: 'pa1', name: 'White Sauce Pasta', description: 'Creamy bechamel sauce with herbs.', price: '₹189', category: 'Pasta & Chinese', image: 'https://images.unsplash.com/photo-1645112481355-f55928d3f663?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'ch1', name: 'Hakka Noodles', description: 'Stir fried noodles with crunchy veggies.', price: '₹149', category: 'Pasta & Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400' },
  { id: 'mg1', name: 'Cheese Maggi', description: 'Comfort Maggi with double cheese melt.', price: '₹119', category: 'Pasta & Chinese', image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400' },
  { id: 'ri1', name: 'Veg Fried Rice', description: 'Classic wok-tossed seasoned rice.', price: '₹159', category: 'Pasta & Chinese', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=400' },

  // SNACKS & SIDES
  { id: 'sn1', name: 'Peri Peri Fries', description: 'Crispy fries with spicy peri dusting.', price: '₹110', category: 'Snacks & Sides', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'sn2', name: 'Veg Steam Momos', description: 'Soft dumplings served with spicy chutney.', price: '₹99', category: 'Snacks & Sides', image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b4?auto=format&fit=crop&q=80&w=400' },
  { id: 'sn3', name: 'Cheese Garlic Bread', description: 'Toasted bread with garlic butter and cheese.', price: '₹120', category: 'Snacks & Sides', image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=400' },

  // DESSERTS
  { id: 'ds1', name: 'Brownie with Ice Cream', description: 'Warm walnut brownie with vanilla scoop.', price: '₹180', category: 'Desserts', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=400', popular: true },
  { id: 'ds2', name: 'Butterscotch Ice Cream', description: 'Two scoops of crunchy butterscotch.', price: '₹90', category: 'Desserts', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400' }
];

export const REVIEWS: Review[] = [
  { id: 'r1', author: 'Harjot Cheema', rating: 5, text: 'Good service, great food. Definitely the best spot in Ramsinghpur for a quick bite.', date: '2 months ago' },
  { id: 'r2', author: 'Poonam Poonam', rating: 5, text: 'Good experience 😃😁😃😁. The vibe is amazing and the staff is very polite.', date: '3 weeks ago' },
  { id: 'r3', author: 'Amit Singh', rating: 4, text: 'Love the Paneer Pizza. Great value for money!', date: '1 week ago' }
];
