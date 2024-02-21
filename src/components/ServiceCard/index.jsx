'use client';

import React, { useState } from 'react';

const ServiceCard = ({ title, service1, service2, service3 }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={handleClick} className="bg-darkgray glass-card m-4 p-4 shadow-md transition-all duration-300 max-w-md mx-auto rounded-lg">
      {!isClicked ? (
        <div className="relative flex flex-col items-center justify-center h-full">
          <h2 className="text-lg font-bold text-cyanforce items-center justify-center">
            {title}
          </h2>
          <p className="mt-2 text-sm text-cyanforce">
            hacer click
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-start justify-center">
          <ul className="list-none p-0 m-0 service-list">
            <li className="mt-2 text-sm text-cyanforce">{service1}</li>
            <li className="mt-2 text-sm text-cyanforce">{service2}</li>
            <li className="mt-2 text-sm text-cyanforce">{service3}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;