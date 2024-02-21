import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db as firestore } from '@/config/firebase';
import ServiceCard from '@/components/ServiceCard';
import '../app/globals.css';


const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesCollection = collection(firestore, 'services');
      const serviceSnapshot = await getDocs(servicesCollection);
      const serviceList = serviceSnapshot.docs.map(doc => doc.data());
      setServices(serviceList);
    };

    fetchServices();
  }, []);

  return (
    <div className="container mx-auto px-8 py-8 mb-30">
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          service1={service.service1}
          service2={service.service2}
          service3={service.service3}
        />
      ))}
    </div>
    </div>
  );
};

export default ServicesPage;