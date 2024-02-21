import React from 'react';
import ImageCardAbout from '@/components/ImageCardAbout';

const AboutUs = () => (
    <div className="glass shadow-lg rounded-lg p-6 mx-2 h-[400px] overflow-x-auto md:max-w-xl lg:max-w-2xl">
        <div className="flex flex-wrap">
        <ImageCardAbout/>
          
        </div>
        <h2 className="text-softmint text-2xl font-bold mb-4">Acerca de nosotros</h2>
        <p className="mb-4 text-cyanforce">
            Ricardo Bravo, fotógrafo y productor audiovisual, me apasiona capturar la esencia de cada marca y convertirla en imágenes impactantes que conecten con el público objetivo. Mi experiencia y creatividad me permiten crear contenido visual de alta calidad que aporta valor a las campañas de marketing.
            <br /><br />
            Zury Martinez, la developer experta en marketing de redes sociales, es la mente estratégica detrás de la agencia. Su conocimiento técnico y su experiencia en marketing digital son claves para el desarrollo de estrategias efectivas que posicionan a nuestros clientes en el mundo online.
            <br /><br />
            Juntos, formamos un equipo dinámico y comprometido que se complementa a la perfección. La combinación de nuestras habilidades y experiencias nos permite ofrecer un servicio integral y de alta calidad a nuestros clientes.
            <br /><br />
            Confiamos en el potencial del mercado digital y estamos convencidos de que nuestra agencia puede ayudar a las empresas locales y regionales a alcanzar sus objetivos de negocio.
            <br /><br />
            Estamos preparados para convertirnos en su aliado estratégico en el camino hacia el éxito digital.
        </p>
    </div>
);

export default AboutUs;