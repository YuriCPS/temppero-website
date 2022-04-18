import React from 'react';
import { string } from 'prop-types';

function Banner({ title, text, img }) {
  return (
    <div className="flex m-6 flex-col sm:flex-row sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80">
      <div className="bg-white p-4 rounded-t-md sm:rounded-l-md grid">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="my-6 text-xl sm:text-2xl">{text}</p>
      </div>
      <img
        className="rounded-b-md sm:rounded-r-md"
        src={img}
        alt={title}
      />
    </div>
  );
}

export default Banner;

Banner.propTypes = {
  title: string,
  text: string,
  img: string,
}.isRequired;
