import React from 'react';

const CompanyValues = () => {
        return (
                <div className="container mx-auto px-8 py-8 mb-30">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-darkgray p-4 rounded shadow">
                                        <h3 className="text-softmint text-sm font-bold mb-2">Profesionalismo</h3>
                                        <p className="text-cyanforce">
                                                Brindamos un servicio de alta calidad con un enfoque profesional y responsable.
                                        </p>
                                </div>
                                <div className="bg-darkgray p-4 rounded shadow">
                                        <h3 className="text-softmint text-md font-bold mb-2">Creatividad</h3>
                                        <p className="text-cyanforce">
                                                Desarrollamos soluciones innovadoras y personalizadas que se ajustan a las necesidades de cada cliente.
                                        </p>
                                </div>
                                <div className="bg-darkgray p-4 rounded shadow">
                                        <h3 className="text-softmint text-md font-bold mb-2">Eficiencia</h3>
                                        <p className="text-cyanforce">
                                                Optimizamos los recursos y el tiempo para ofrecer un servicio eficiente y rentable.
                                        </p>
                                </div>
                                <div className="bg-darkgray p-4 rounded shadow">
                                        <h3 className="text-softmint text-md font-bold mb-2">Compromiso</h3>
                                        <p className="text-cyanforce">
                                                Nos involucramos en cada proyecto con pasión y dedicación, buscando siempre el mejor resultado para nuestros clientes.
                                        </p>
                                </div>
                                <div className="bg-darkgray p-4 rounded shadow">
                                        <h3 className="text-softmint text-md font-bold mb-2">Responsabilidad</h3>
                                        <p className="text-cyanforce">
                                                Actuamos con ética y transparencia en todas nuestras relaciones.
                                        </p>
                                </div>
                                <div className="bg-darkgray p-4 rounded shadow">
                                        <h3 className="text-softmint text-md font-bold mb-2">Trabajo en equipo</h3>
                                        <p className="text-cyanforce">
                                                Creemos en la colaboración y el trabajo en equipo como base del éxito.
                                        </p>
                                </div>
                        </div>
                </div>
        );
};

export default CompanyValues;