
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Beverages' | 'Burgers & Sandwiches' | 'Pizzas' | 'Pasta & Chinese' | 'Snacks & Sides' | 'Desserts';
  image: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface CafeInfo {
  name: string;
  address: string;
  phone: string;
  rating: number;
  totalReviews: number;
  hours: string;
}
