export interface Product {
  id: string;
  name: string;
  price: number;
  image: string | unknown;
  description: string;
  category: string;
  duration: string;
  features: Array<string>;
}