import React from 'react';
import Banner from './components/Banner';
import Button from './components/Button';
import logo from './images/logo.png';
import nossaComida from './images/01.webp';

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
      <Banner
        title="Nossa Comida"
        text="Preparamos nossos pratos com os melhores ingredientes encontrados no mercado, zelando pela qualidade e sabor oferecido a nosso cliente. As melhores marcas e fornecedores para proporcionar a você o que há de melhor."
        img={nossaComida}
      />
    </>
  );
}

export default App;
