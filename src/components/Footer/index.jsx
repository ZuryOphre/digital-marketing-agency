import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full py-4 px-6 absolute bottom-0 glass">
            <div className="container mx-auto flex items-center justify-center">
                <p>Development by <Link legacyBehavior href="/"><a className="text-white hover:text-gray-300">Sōshiza</a></Link> © {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;