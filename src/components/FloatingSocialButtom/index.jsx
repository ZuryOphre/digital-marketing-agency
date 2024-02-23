import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FloatingSocialButtons = () => {
  return (
    <div className="fixed bottom-0 left-0 mb-40 ml-6 z-50">
      <ul style={{ top: "50%", marginTop: "10px" }}>
        <li className="mb-2 p-1">
          <Link  legacyBehavior href="https://www.facebook.com/yourusername">
            <a
              target="_blank"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white hover:animate-bounce"
            >
              <Image src="/facebook.png" alt="Facebook" width={40} height={40} />
            </a>
          </Link>
        </li>
        <li className="mb-2 p-1">
          <Link legacyBehavior href="https://www.instagram.com/yourusername">
            <a
              target="_blank"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white hover:animate-bounce"
            >
              <Image src="/instagram.png" alt="Instagram" width={40} height={40} />
            </a>
          </Link>
        </li>
        <li className="mb-2 p-1">
          <Link legacyBehavior href="https://www.tiktok.com/yourusername">
            <a
              target="_blank"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-white hover:animate-bounce"
            >
              <Image src="/tik-tok.png" alt="TikTok" width={40} height={40} />
            </a>
          </Link>
        </li>
        <li className="mb-2 p-1">
          <Link legacyBehavior href="https://www.youtube.com/yourusername">
            <a
              target="_blank"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-white hover:animate-bounce"
            >
              <Image src="/youtube.png" alt="Youtube" width={40} height={40} />
            </a>
          </Link>
        </li>
        {/* ... agrega los demás botones de redes sociales aquí ... */}
      </ul>
    </div>
  );
};

export default FloatingSocialButtons;