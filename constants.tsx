
import { MenuItem, Review, CafeInfo } from './types';

export const CAFE_INFO: CafeInfo = {
  name: "A1cafe",
  address: "Hayer market, Gharsana - Ramsinghpur Rd, Ramsinghpur, Rajasthan 335703",
  phone: "073575 76969",
  rating: 4.86,
  totalReviews: 142,
  hours: "10:00 AM - 10:00 PM"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'Classic A1 Burger',
    description: 'Juicy vegetable patty with signature sauce, lettuce, and premium cheese.',
    price: '₹129',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: 'b2',
    name: 'Spicy Paneer Burger',
    description: 'Crispy marinated paneer with spicy mayo and fresh onions.',
    price: '₹159',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p1',
    name: 'Farmhouse Special Pizza',
    description: 'Loaded with capsicum, onion, tomato, and golden corn on fresh crust.',
    price: '₹249',
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: 'p2',
    name: 'Margherita Classic',
    description: 'Authentic tomato sauce, fresh basil, and extra mozzarella cheese.',
    price: '₹199',
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 's1',
    name: 'Grilled Cheese Sandwich',
    description: 'Three layers of cheese grilled to perfection on artisan bread.',
    price: '₹99',
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sd1',
    name: 'Peri Peri Fries',
    description: 'Crispy golden fries tossed in our secret peri-peri spice mix.',
    price: '₹89',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: 'd1',
    name: 'Iced Hazelnut Latte',
    description: 'Smooth cold brew mixed with rich hazelnut syrup and cold milk.',
    price: '₹119',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=400'
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
