import React, { useEffect, useState } from 'react';
import { db as firestore } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ImageCardAbout = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'about'));
      return querySnapshot.docs.map(doc => doc.data());
    };

    fetchImages().then(setImages);
  }, []);

  return (
    <div>
      <div className="p-4">
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div key={index} className="glass rounded-lg p-4 mb-4">
              <img src={image.imageURL} alt={image.name} className="w-full h-auto rounded-lg mb-2" />
              <p className="text-gray-700">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCardAbout;