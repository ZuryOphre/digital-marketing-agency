import React from 'react';

const MisionAndVision = () => {
    return (
        <div className="container mx-auto  mt-12 mr-4 ">
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <div className="bg-darkgray w-auto md:w-64 h-64 p-4 m-4 mt-0 mb-2 overflow-auto">
                    <h2 className="text-softmint text-center text-2xl font-bold">Misión</h2>
                    <p className="text-cyanforce text-center">Ser la agencia de publicidad digital líder en la región, brindando soluciones integrales y personalizadas que potencien la presencia online de nuestros clientes y les ayuden a alcanzar sus objetivos de negocio.</p>
                </div>
                <div className="bg-darkgray w-auto md:w-64 h-64 p-4 m-4 mt-0 mb-2 overflow-auto">
                    <h2 className="text-softmint text-center text-2xl font-bold">Visión</h2>
                    <p className="text-cyanforce text-center">Convertirnos en un aliado estratégico para las empresas locales y regionales, impulsando su crecimiento y éxito en el mundo digital a través de estrategias innovadoras y creativas.</p>
                </div>
            </div>
        </div>
    );
};

export default MisionAndVision;