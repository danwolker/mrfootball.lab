import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importação correta do FontAwesome
import { ProductProvider } from "./contexts/ProductsContext";
import { initMercadoPago } from '@mercadopago/sdk-react'
import  {useEffect} from "react"

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento root não encontrado");
}
initMercadoPago('TEST-b09e1c27-3111-4e6c-86a3-ff2036312f46', {
  locale: 'pt-BR'
})


ReactDOM.createRoot(rootElement).render(

    <ProductProvider>
      <App />
    </ProductProvider>

);
