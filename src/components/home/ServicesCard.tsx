import  { useState } from 'react';
import {type ServiceItem } from '../../types/property';
import { Button } from '../ui/Button';

const SERVICES_DATA: ServiceItem[] = [
  { 
    id: '1', 
    title: 'Achat',
    description: 'Trouvez la propriété de vos rêves parmi nos exclusivités vérifiées.',
    details: 'Notre service d’achat vous offre un accompagnement juridique, financier et technique de A à Z.'
  },
  { 
    id: '2', 
    title: 'Location',
    description: 'Sélection de biens haut standing pour un séjour confortable.',
    details: 'Portefeuille d’appartements et villas meublés ou vides de grand standing.'
  },
  { 
    id: '3', 
    title: 'Gestion',
    description: 'Confiez-nous la gestion de votre patrimoine en toute sérénité.',
    details: 'Nous prenons en charge l’intégralité de la gestion locative et technique.'
  },
  { 
    id: '4', 
    title: 'Conseil',
    description: 'Bénéficiez d’un accompagnement d’expert pour investir au mieux.',
    details: 'Maximisez la rentabilité de vos investissements immobiliers.'
  }
];

export function ServiceCard() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif text-[#f5ebd9] mb-8">
        Un accompagnement sur mesure
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map((service) => (
          <div key={service.id} className="p-6 bg-[#0b261a] border border-[#e5c185]/20 rounded-2xl flex flex-col justify-between hover:border-[#e5c185]/50 transition-colors">
            <div>
              <h3 className="text-lg font-serif text-[#e5c185] mb-2">{service.title}</h3>
              <p className="text-xs text-[#cccccc] leading-relaxed mb-6">{service.description}</p>
            </div>
            <button 
              onClick={() => setActiveService(service)}
              className="text-xs text-[#e5c185] font-medium hover:underline flex items-center gap-1 cursor-pointer text-left"
            >
              En savoir plus →
            </button>
          </div>
        ))}
      </div>

      {activeService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0b261a] border border-[#e5c185]/40 rounded-3xl max-w-md w-full p-6 relative shadow-2xl">
            <button 
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-[#cccccc] hover:text-white text-lg font-bold w-8 h-8 rounded-full bg-[#030c08] flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-2xl font-serif text-[#e5c185] mb-4">Service : {activeService.title}</h3>
            <p className="text-[#f5ebd9] text-sm mb-6 leading-relaxed">{activeService.details}</p>
            <Button variant="primary" className="w-full text-[#030c08]" onClick={() => setActiveService(null)}>
              Fermer
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}