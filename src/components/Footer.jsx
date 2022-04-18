import React from 'react';
import logo from '../images/logo2.png';
import facebook from '../icons/facebook.svg';
import instagram from '../icons/instagram.svg';
import whatsapp from '../icons/whatsapp.svg';

function Footer() {
  return (
    <div className="flex bg-gray-100 m-6 p-4 rounded-md flex-col items-center sm:flex-row sm:justify-center sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80">
      <img
        className="w-48 mx-10"
        src={logo}
        alt="Temppero"
      />
      <div className="flex mt-6 space-x-4 ">
        <img
          className="h-20 "
          src={facebook}
          alt="Facebook"
        />
        <img
          className="h-20 "
          src={instagram}
          alt="Instagram"
        />
        <img
          className="h-20 "
          src={whatsapp}
          alt="WhatsApp"
        />
      </div>
    </div>
  );
}

export default Footer;
