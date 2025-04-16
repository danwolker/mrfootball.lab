import {
  createContext,
  ReactNode,
  useContext,
} from "react";

import { useProducts } from './ProductsContext'

interface PaymentsContextType {
    createPreference: (name:string, last_name: string) => void;
}


const PaymentsContext = createContext<PaymentsContextType | undefined>(
  undefined
);

export const PaymentsProvider = ({ children }: { children: ReactNode }) => {
    const {cartItems } = useProducts()

    
    const createPreference = async (name:string, last_name: string) => {
    const data = {
      name,
      last_name,
      boots: cartItems
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/create_mercado_pago_preference",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        alert("Redirecionando para o Mercado Pago");
        window.location.href = result.init_point;
      } else {
        alert(`Erro: ${result.error}`);
      }
    } catch (err) {
      alert("Erro ao conectar com o servidor");
    }
  };








  return (
    <PaymentsContext.Provider value={{createPreference}}>{children}</PaymentsContext.Provider>
  );
};

export const usePayments = ():PaymentsContextType => {
  const context = useContext(PaymentsContext);
  if (!context) {
    throw new Error("Erro no Provider");
  }
  return context;
};
