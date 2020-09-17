export default interface Product {
  id: string;
  name: string;
  selectedSize?: number;
  price: number;
  images: string[];
  seller: string;
  availableSizes: number[];
  discount?: { price: number; rate: number };
}
