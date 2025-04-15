import React, { FormEvent, useEffect } from "react";
import "../styles/AddressForm.css";
import { useProducts } from "../contexts/ProductsContext";

const AddressForm: React.FC = () => {
  const { cartItems, clearCartItems } = useProducts();

 

  const handleFinishOrder = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("nome") as string,
      last_name: formData.get("sobrenome") as string,
      street: formData.get("street") as string,
      number: formData.get("number"),
      neighborhood: formData.get("neighborhood") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      address_complement: formData.get("complement") as string,
      cep: formData.get("cep") as string,
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

    const pedido = cartItems
      .map(
        (i) =>
          `${i.product.brand} ${i.product.line} ${i.product.color} http://localhost:8000${i.product.image} \nQuantidade: ${i.amount}\n------------------`
      )
      .join("\n"); // Adiciona quebra entre itens

    const defaultMessage =
      `*NOVO PEDIDO*\n\n` +
      `*Cliente:* ${data.name} ${data.last_name}\n` +
      `*Endereço:* ${data.street}, ${data.number}\n` +
      `*Complemento:* ${data.address_complement}` +
      `${data.neighborhood}, ${data.city}/${data.state}\n` +
      `CEP: ${data.cep}\n\n` +
      `*Produtos:*\n${pedido}\n\n`;

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
            <input name="nome" id="nome" type="text" />
          </div>
          <div className="item-div">
            <label htmlFor="sobrenome">Sobrenome: </label>
            <input name="sobrenome" id="sobrenome" type="text" />
          </div>
        </div>

        <h2>Endereço</h2>
        <div className="address-container">
          <div className="item-div">
            <label htmlFor="street">Rua: </label>
            <input name="street" id="street" type="text" required />
          </div>
          <div className="item-div">
            <label htmlFor="number">Número: </label>
            <input name="number" id="number" type="number" required />
          </div>
          <div className="item-div">
            <label htmlFor="neighborhood">Bairro: </label>
            <input name="neighborhood" id="neighborhood" type="text" required />
          </div>
          <div className="item-div">
            <label htmlFor="city">Cidade: </label>
            <input name="city" id="city" type="text" required />
          </div>
          <div className="item-div">
            <label htmlFor="state">Estado: </label>
            <input name="state" id="state" type="text" required />
          </div>
          <div className="item-div">
            <label htmlFor="complement">Complemento: </label>
            <input name="complement" id="complement" type="text" />
          </div>
          <div className="item-div">
            <label htmlFor="cep">CEP: </label>
            <input name="cep" id="cep" type="text" required />
          </div>
        </div>
        <button
          onClick={() => handleFinishOrder}
          className="finish-shopping-button"
          type="submit"
        >
          Finalizar Compra no WhatsApp
        </button>
      </form>
  
    </div>
  );
};

export default AddressForm;
