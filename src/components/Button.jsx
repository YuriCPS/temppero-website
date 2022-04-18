import React from 'react';

function Button() {
  return (
    <div className="flex justify-center ">
      <button
        className="rounded-md text-xl font-medium bg-amber-400 hover:bg-amber-500 animate-bounce p-4 m-6 "
        type="button"
      >
        CLIQUE AQUI E FAÇA SEU PEDIDO
      </button>
    </div>
  );
}

export default Button;
