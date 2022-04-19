import React from 'react';
import Banner from './components/Banner';
import Button from './components/Button';
import logo from './images/logo.png';
import nossaComidaImg from './images/01.webp';
import tempperoImg from './images/02.webp';
import desdeImg from './images/03.webp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <h1 className="text-bordo text-center">
        Restaurante Temppero
      </h1>
      <img
        className="object-fill mx-auto"
        src={logo}
        alt="Temppero"
        width="400"
      />
      <Button />
      <Banner
        title="Nossa Comida"
        text="Preparamos nossos pratos com os melhores ingredientes encontrados no mercado, zelando pela qualidade e sabor oferecido ao nosso cliente. As melhores marcas e fornecedores para proporcionar a você o que há de melhor."
        img={nossaComidaImg}
      />
      <Banner
        title="Temppero"
        text="De família com descendência italiana, a Chef sempre gostou de cozinhar e se dedicar a comida, com mais de 15 anos trabalhando diretamente no ramo de alimentação seja com seu próprio negócio ou não, todo alimento preparado por nós tem o 'temppero' tradicional que todos que provam reconhecem."
        img={tempperoImg}
      />
      <Banner
        title="Desde 2004"
        text="Começamos com uma lanchonete de nome Big Boca, na mesma localidade onde funcionamos hoje. Com o tempo fomos crescendo e ampliando nosso cardápio até oferecer almoço, com o mesmo sabor caseiro que você se delicia hoje. Encerramos nossas atividades no ano de 2012, retornando em 2017 com novo nome, desta vez Temppero."
        img={desdeImg}
      />
      <Footer />
    </>
  );
}

export default App;
