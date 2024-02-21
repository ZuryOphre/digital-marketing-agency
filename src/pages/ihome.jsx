import React from 'react';
import Banner from '../components/Banner';

const Ihome = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Banner className="self-center p-4" />
      <h1 className="text-2xl mt-2 text-cyanforce">Hola, somos Sōshiza.</h1>
      <p className="text-lg mt-2 text-sky">Somos una agencia de publicidad digital <br/> especializada en ayudar a empresas locales y regionales a alcanzar sus objetivos <br/> de negocio a través del marketing online.</p>
    </div>
  );
};

export default Ihome;
