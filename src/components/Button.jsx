import React, { useState } from 'react';

function Button() {
  const [clicked, setClicked] = useState(false);
  const message = "Clicando em 'FAÇA O SEU PEDIDO' você será direcionado para a página de pedidos onde poderá visualizar o cardápio, caso você não tenha cadastro o processo é bem rápido! Não esqueça de escolher se você quer Delivery, Retirar no Local ou Consumir Aqui!";

  const firstClick = () => {
    setClicked(true);
  };

  return (
    <div className="flex justify-center">
      {!clicked
      && (
      <button
        className="p-4 m-6 text-xl font-semibold rounded-md bg-amber-400 hover:bg-amber-500 animate-bounce"
        type="button"
        onClick={firstClick}
      >
        CLIQUE AQUI E FAÇA SEU PEDIDO
      </button>
      )}
      {clicked
      && (
      <div className="flex-col text-center">
        <a href="https://app.menudino.com/temppero">
          <button
            className="p-4 mx-auto mt-6 text-xl font-semibold rounded-md bg-amber-400 hover:bg-amber-500 animate-bounce"
            type="button"
          >
            FAÇA SEU PEDIDO
          </button>
        </a>
        <p className="p-6 font-semibold text-white sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80">{message}</p>
      </div>
      )}
    </div>
  );
}

export default Button;
