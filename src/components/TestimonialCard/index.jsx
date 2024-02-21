import React, { useEffect, useState } from 'react';
import { db as firestore } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const TestimonialDisplay = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonialCollection = collection(firestore, 'testimonials');
      const testimonialSnapshot = await getDocs(testimonialCollection);
      const testimonialList = testimonialSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTestimonials(testimonialList);
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <h2>{testimonial.name}</h2>
          <p>{testimonial.description}</p>
          <img src={testimonial.imageURL} alt={testimonial.name} />
          <p>{testimonial.tag}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialDisplay;