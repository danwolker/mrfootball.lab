import React, { FormEvent, useEffect, useState } from "react";
import "../styles/AddressForm.css";
import { useProducts } from "../contexts/ProductsContext";
import { usePayments } from "../contexts/PaymentsContext";
import { Wallet } from "@mercadopago/sdk-react";

const AddressForm: React.FC = () => {
  const [payerName, setName] = useState("");
  const [payerLastName, setLastName] = useState("");
  const [streetPreference, setStreetPreference] = useState("");
  const [numberPreference, setNumberPreference] = useState(0);
  const [neighborhoodPreference, setNeiborhoodPreference] = useState("");
  const [cityPreference, setCityPreference] = useState("");
  const [statePreference, setStatePreference] = useState("");
  const [addresComplementPreference, setAddresComplementPreference] =
    useState("");
  const [phonePreference, setPhonePreference] = useState(0);
  const [cepPreference, SetCepPreference] = useState("");
  const { cartItems, clearCartItems } = useProducts();
  const { createPreference, preferenceId } = usePayments();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  // Cria preferencia e pega o PreferenceID para mostrar o botão de pagar no mercado pago
  const handleStartPayment = async () => {
    const addres = {
      street: streetPreference,
      number: numberPreference,
      neighborhood: neighborhoodPreference,
      city: cityPreference,
      state: statePreference,
      addres_complement: addresComplementPreference,
      phone: phonePreference,
      cep: cepPreference,
    };
    createPreference(payerName, payerLastName, addres);
    setIsPaymentOpen(true);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.amount;
    }, 0);
  };

  // Chama o caminho finish_order e fecha o pedido no wpp

  const handleFinishOrderOnWhatsApp = async () => {
    const totalValue = calculateTotal();

    const data = {
      name: payerName,
      last_name: payerLastName,
      street: streetPreference,
      number: numberPreference,
      neighborhood: neighborhoodPreference,
      city: cityPreference,
      state: statePreference,
      addres_complement: addresComplementPreference,
      phone: phonePreference,
      cep: cepPreference,
      boots: cartItems,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/finish_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        console.error("Erro:", result.error);
        alert(`Erro ao finalizar pedido: ${result.error}`);
      } else {
        alert("Você será encaminhado(a) ao whatsapp para efetuar o pagamento");
        // Redirecionar ou limpar o carrinho
      }
    } catch (err) {
      console.error("Erro:", err);
      alert("Erro ao conectar com o servidor");
    }

    //Pedido para enviar ao Wpp

    const pedido = cartItems
      .map(
        (i) =>
          `${i.product.brand} ${i.product.line} ${i.product.color} http://localhost:8000${i.product.image} \nQuantidade: ${i.amount}\n------------------`
      )
      .join("\n");

    const defaultMessage =
      `*NOVO PEDIDO*\n\n` +
      `*Cliente:* ${data.name} ${data.last_name}\n` +
      `*Endereço:* ${data.street}, ${data.number}\n` +
      `*Complemento:* ${data.addres_complement}` +
      `${data.neighborhood}, ${data.city}/${data.state}\n` +
      `CEP: ${data.cep}\n\n` +
      `*Produtos:*\n${pedido}\n\n` +
      `*TOTAL DO PEDIDO: R$ ${totalValue.toFixed(2)}*`;

    const phoneNumber = "5548988770408";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    clearCartItems();
  };

  return (
    <div className="form-container">
      <form className="form" id="form">
        <h2>Dados Pessoais</h2>
        <div className="item-div-personal-data">
          <div className="item-div">
            <label htmlFor="nome">Nome: </label>
            <input
              name="nome"
              id="nome"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="item-div">
            <label htmlFor="sobrenome">Sobrenome: </label>
            <input
              name="sobrenome"
              id="sobrenome"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="item-div">
            <label htmlFor="phone">Celular: </label>
            <input
              name="phone"
              id="phone"
              type="tel"
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              onChange={(e) => setPhonePreference(Number(e.target.value))}
            />
          </div>
        </div>

        <h2>Endereço</h2>
        <div className="address-container">
          <div className="item-div">
            <label htmlFor="street">Rua: </label>
            <input
              name="street"
              id="street"
              type="text"
              required
              onChange={(e) => setStreetPreference(e.target.value)}
            />
          </div>
          <div className="item-div">
            <label htmlFor="number">Número: </label>
            <input
              name="number"
              id="number"
              type="number"
              required
              onChange={(e) => setNumberPreference(Number(e.target.value))}
            />
          </div>
          <div className="item-div">
            <label htmlFor="neighborhood">Bairro: </label>
            <input
              name="neighborhood"
              id="neighborhood"
              type="text"
              required
              onChange={(e) => setNeiborhoodPreference(e.target.value)}
            />
          </div>
          <div className="item-div">
            <label htmlFor="city">Cidade: </label>
            <input
              name="city"
              id="city"
              type="text"
              required
              onChange={(e) => setCityPreference(e.target.value)}
            />
          </div>
          <div className="item-div">
            <label htmlFor="state">Estado: </label>
            <input
              name="state"
              id="state"
              type="text"
              required
              onChange={(e) => setStatePreference(e.target.value)}
            />
          </div>
          <div className="item-div">
            <label htmlFor="complement">Complemento: </label>
            <input
              name="complement"
              id="complement"
              type="text"
              onChange={(e) => setAddresComplementPreference(e.target.value)}
            />
          </div>
          <div className="item-div">
            <label htmlFor="cep">CEP: </label>
            <input
              name="cep"
              id="cep"
              type="text"
              required
              onChange={(e) => SetCepPreference(e.target.value)}
            />
          </div>
        </div>
        <div >
          <button className="finish-shopping-button" type="button" onClick={handleStartPayment}>
            Pagar com Mercado Pago
          </button>

          <button className="finish-shopping-button"  type="button" onClick={handleFinishOrderOnWhatsApp}>
            Finalizar no WhatsApp
          </button>
        </div>

        {isPaymentOpen && preferenceId && (
          <div className="mercado-pago-container">
            <Wallet initialization={{ preferenceId: preferenceId }} />
          </div>
        )}
      </form>
    </div>
  );
};

export default AddressForm;
