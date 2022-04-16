import React from 'react';
import Button from './components/Button';
import logo from './images/logo.png';

function App() {
  return (
    <>
      <h1 className="text-bordo text-center ">
        Restaurante Temppero
      </h1>
      <img
        className="object-fill mx-auto "
        src={logo}
        alt="Temppero"
        width="400"
      />
      <Button />
    </>
  );
}

export default App;
