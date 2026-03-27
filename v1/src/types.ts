export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  category: 'burger' | 'pizza' | 'doner' | 'schnitzel' | 'salad' | 'pide' | 'snack';
  tags?: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}
