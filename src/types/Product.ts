export default interface Product {
  id: string;
  name: string;
  selectedSize?: number;
  inStock: number;
  price: number;
  images: string[];
  seller: string;
  availableSizes: number[];
  discount?: { price: number; rate: number };
}
