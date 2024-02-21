import { useState } from 'react';
import MisionAndVision from '../Secction/misionAndVision';
import AboutUs from '../Secction/aboutus';
import CompanyValues from '../Secction/companyvalues';

const LayoutCard = () => {
    const [activeComponent, setActiveComponent] = useState('aboutus');

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className="flex min-h-screen pb-14 mt-2" style={{ width: '100vw', height: 'calc(100vh - 16px)', overflowY: 'auto' }}>
            <aside className="bg-darkgray flex flex-col items-center justify-between p-4 shadow-md w-64 pt-8">
                <nav className="flex flex-col gap-4 pt-8">
                    {/* Links */}
                    <a onClick={() => handleComponentChange('aboutus')} className="text-cyanforce hover:text-cyan-500 font-medium cursor-pointer">Acerca de Nosotros</a>
                    <a onClick={() => handleComponentChange('companyvalues')} className="text-cyanforce hover:text-cyan-500 font-medium cursor-pointer">Valores de Empresa</a>
                    <a onClick={() => handleComponentChange('misionAndVision')} className="text-cyanforce hover:text-cyan-500 font-medium cursor-pointer">Mision & vision</a>
                </nav>
            </aside>
            <main className="flex-grow p'2" style={{ maxWidth: 'calc(100vw - 64px)' }}>
                {activeComponent === 'aboutus' && <AboutUs />}
                {activeComponent === 'companyvalues' && <CompanyValues />}
                {activeComponent === 'misionAndVision' && <MisionAndVision />}
            </main>
        </div>
    );
};

export default LayoutCard;