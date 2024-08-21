import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  Favourites: [],
  addToCart: (Coffee) => {
    const itemPresent = get().cart.find((item) => item.id === Coffee.id);
    if (itemPresent) {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === Coffee.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }));
    } else {
      set((state) => ({
        cart: [...state.cart, { ...Coffee, quantity: 1 }],
      }));
    }
  },
  removeFromCart: (CoffeeID) => {
    const itemPresent = get().cart.find((item) => item.id === CoffeeID);
    if (itemPresent.quantity > 1) {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === CoffeeID ? { ...item, quantity: item.quantity - 1 } : item
        ),
      }));
    } else {
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== CoffeeID),
      }));
    }
  },
  addToFavorite: (coffee) => {
    const itemPresent = get().Favourites.find((item) => item.id === coffee.id);
    if (itemPresent) {
      set((state) => ({
        Favourites: state.Favourites.filter((f) => f.id !== coffee.id),
      }));
    } else {
      set((state) => ({ Favourites: [...state.Favourites, { ...coffee }] }));
    }
  },
  deleteFromCart: (CoffeeID) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== CoffeeID),
    }));
  },
  cartLength: () => {
    return get().cart.length;
  },
  cartTotal: () => {
    return get().cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  },
}));
