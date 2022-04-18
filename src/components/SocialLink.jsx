import React from 'react';
import { string } from 'prop-types';

function SocialLink({ title, img, url }) {
  return (
    <a href={url}>
      <img
        className="h-20"
        src={img}
        alt={title}
      />
    </a>
  );
}

export default SocialLink;

SocialLink.propTypes = {
  title: string,
  img: string,
  url: string,
}.isRequired;
