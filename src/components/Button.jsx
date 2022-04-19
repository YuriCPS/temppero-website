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
        className="rounded-md text-xl font-semibold bg-amber-400 hover:bg-amber-500 animate-bounce p-4 m-6"
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
            className="rounded-md text-xl font-semibold bg-amber-400 hover:bg-amber-500 animate-bounce p-4 mt-6 mx-auto"
            type="button"
          >
            FAÇA SEU PEDIDO
          </button>
        </a>
        <p className=" text-white font-semibold p-6 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80">{message}</p>
      </div>
      )}
    </div>
  );
}

export default Button;
