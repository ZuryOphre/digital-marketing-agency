import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <div>
            <Image src="/Logo.png" alt="Logo" width={90} height={90} className="flex-shrink-0 pt-0"/>
        </div>
    );
};

export default Logo;
