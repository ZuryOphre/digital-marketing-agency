import React from 'react';

const ImageCardTestimonial = ({ image }) => {
    return (
        <div className="glass rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{image.name}</h2>
            <img src={image.imageURL} alt={image.name} className="w-64 h-64  rounded-lg mb-2" />
            <p className="text-gray-700">{image.description}</p>
        </div>
    );
};

export default ImageCardTestimonial;