import React, { useState } from 'react';

function Button() {
  const [clicked, setClicked] = useState(false);

  const firstClick = () => {
    setClicked(true);
  };

  return (
    <div className="flex justify-center ">
      {!clicked
      && (
      <button
        className="rounded-md text-xl font-medium bg-amber-400 hover:bg-amber-500 animate-bounce p-4 m-6 "
        type="button"
        onClick={firstClick}
      >
        CLIQUE AQUI E FAÇA SEU PEDIDO
      </button>
      )}
      {clicked
      && (
      <div>
        <p>Clicando em "FAÇA O SEU PEDIDO" você será direcionado para a pagina de pedidos onde poderá visualizar o cardápio, caso não tenha se cadastrado o processo é bem rápido! Não esqueça de escolher se você quer Deliery, Retirar no Local ou Consumir Aqui!</p>
        <a href="https://app.menudino.com/temppero">
          <button
            className="rounded-md text-xl font-medium bg-amber-400 hover:bg-amber-500 animate-bounce p-4 m-6 "
            type="button"
          >
            FAÇA SEU PEDIDO
          </button>
        </a>
      </div>
      )}
    </div>
  );
}

export default Button;
