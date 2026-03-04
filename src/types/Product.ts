export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  category: string;
  sizes?: string[];
  colors?: string[];
}
