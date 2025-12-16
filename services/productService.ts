import { Product } from '../types';

const STORAGE_KEY = 'biopeak_store_products';

const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Smartwatch Runner X',
    description: 'Monitore seus batimentos e integre perfeitamente com o BioPeak App. Bateria de longa duração.',
    price: 299.90,
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800',
    affiliateLink: '#',
    category: 'Tecnologia',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Tênis Ultra Boost Performance',
    description: 'Amortecimento responsivo para suas corridas mais longas. Conforto e estabilidade.',
    price: 599.00,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    affiliateLink: '#',
    category: 'Vestuário',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Kit Elásticos de Resistência',
    description: 'Perfeito para treinos em casa sugeridos pelo BioPeak Coach. 5 níveis de intensidade.',
    price: 89.90,
    imageUrl: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=800',
    affiliateLink: '#',
    category: 'Acessórios',
    isFeatured: false
  },
  {
    id: '4',
    name: 'Garrafa Térmica 1L',
    description: 'Mantenha-se hidratado durante todo o treino. Mantém gelado por 24h.',
    price: 120.00,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-011141959845?auto=format&fit=crop&q=80&w=800',
    affiliateLink: '#',
    category: 'Acessórios',
    isFeatured: false
  }
];

export const productService = {
  getAll: (): Product[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
      return INITIAL_PRODUCTS;
    }
    return JSON.parse(stored);
  },

  add: (product: Omit<Product, 'id'>): Product => {
    const products = productService.getAll();
    const newProduct = { ...product, id: crypto.randomUUID() };
    const updated = [newProduct, ...products];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newProduct;
  },

  delete: (id: string): void => {
    const products = productService.getAll();
    const updated = products.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
};