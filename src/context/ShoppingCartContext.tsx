import { createContext, useContext, ReactNode } from "react";

interface ShoppingCartContextValue {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
2
type ShoppingContext = {
    getItemQuantity: (id: number) => number,
    increaseCartQuantity: (id: number) => void,
    decreaseCartQuantity: (id: number) => void,
    getItemQuantity: (id: number) => number
}

const ShoppingCartContext = createContext<ShoppingCartContextValue | undefined>(undefined);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const initialValue: ShoppingCartContextValue = {
        id: 0,
        name: "",
        price: 0,
        imageUrl: "",
    };

  return (
    <ShoppingCartContext.Provider value={initialValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
