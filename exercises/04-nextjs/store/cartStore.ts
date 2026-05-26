import { create } from 'zustand';

type CartItem = {
  id: number;
  name: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const updated = [...state.items, item];
      localStorage.setItem('cart', JSON.stringify(updated));
      return { items: updated };
    }),
  removeItem: (id) =>
    set((state) => {
      const updated = state.items.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updated));
      return { items: updated };
    }),
  clearCart: () => {
    localStorage.removeItem('cart');
    return set({ items: [] });
  },
}));