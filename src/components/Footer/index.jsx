import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-darkgray rounded-t-xl rounded-b-none w-full py-4 px-6 fixed bottom-0 z-40">
            <div className="container mx-auto flex items-center justify-center">
                <p className='text-cyanforce'>Development by <Link legacyBehavior href="/"><a className="text-softmint hover:text-gray-300">Sōshiza</a></Link> © {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;