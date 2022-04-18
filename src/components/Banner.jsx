import React from 'react';
import { string } from 'prop-types';

function Banner({ title, text, img }) {
  return (
    <div className="flex m-6 flex-col sm:flex-row">
      <div className="bg-white p-4 rounded-t-md sm:rounded-l-md">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="my-6 text-xl">{text}</p>
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
