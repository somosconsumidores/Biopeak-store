export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  affiliateLink: string;
  category: string;
  isFeatured?: boolean;
}

export type ViewState = 'store' | 'admin';

export const CATEGORIES = [
  'Acessórios',
  'Vestuário',
  'Suplementos',
  'Equipamentos',
  'Tecnologia'
];