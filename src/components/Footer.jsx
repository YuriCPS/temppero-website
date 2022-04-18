import React from 'react';
import logo from '../images/logo2.png';
import facebook from '../icons/facebook.svg';
import instagram from '../icons/instagram.svg';
import whatsapp from '../icons/whatsapp.svg';
import SocialLink from './SocialLink';

function Footer() {
  return (
    <div className="flex bg-gray-100 m-6 p-4 rounded-md flex-col items-center sm:flex-row sm:justify-center sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80">
      <img
        className="w-48 mx-10"
        src={logo}
        alt="Temppero"
      />
      <div className="flex mt-6 space-x-4 sm:mt-0">
        <SocialLink
          title="Facebook"
          img={facebook}
          url="https://www.facebook.com/Temppero/"
        />
        <SocialLink
          title="Instagram"
          img={instagram}
          url="https://instagram.com/temppero/"
        />
        <SocialLink
          title="WhatsApp"
          img={whatsapp}
          url="https://wa.me/558330996080"
        />
      </div>
    </div>
  );
}

export default Footer;
