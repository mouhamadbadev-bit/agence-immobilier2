import { useState } from 'react';
import { PropertyCard } from './PropertyCard';
import {type  Property } from '../../types/property';
import { Button } from '../ui/Button';

interface PropertyGridProps {
  selectedLocation: string;
  selectedType: string;
}

const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Villa moderne avec piscine',
    location: 'Dakar, Dakar',
    price: '150 000 000 FCFA',
    bedrooms: 8,
    bathrooms: 4,
    area: '350m²',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    description: 'Magnifique villa contemporaine d’architecte dotée d’une grande piscine à débordement et de finitions luxueuses.'
  },
  {
    id: '2',
    title: 'Appartement ont standing',
    location: 'Dakar, Dakar',
    price: '1 500 000 FCFA/mois',
    bedrooms: 3,
    bathrooms: 2,
    area: '120m²',
    description: 'Appartement lumineux et sécurisé situé au cœur de Dakar.',
    imageUrl:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },

  {
    id: '3',
    title: 'Maison familiale spaciesese',
    location: 'Sey, V1 Dakar',
    price: '95 000 000 FCFA',
    bedrooms: 4,
    bathrooms: 2,
    area: '200m²',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    description: 'Idéale pour une grande famille, cette maison spacieuse combine calme et sécurité.'
  },
  {
    id: '4',
    title: 'Résidence moderne',
    location: 'Dakar, Patassu',
    price: '75 000 000 FCFA',
    bedrooms: 2,
    bathrooms: 3,
    area: '100m²',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    description: 'Résidence moderne avec prestations haut de gamme dans un quartier calme.'
  }
];

export function PropertyGrid({ selectedLocation, selectedType }: PropertyGridProps) {
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);

  const filteredProperties = MOCK_PROPERTIES.filter(property => {
    const matchLocation = selectedLocation ? property.location.toLowerCase().includes(selectedLocation.toLowerCase()) : true;
    const matchType = selectedType ? property.title.toLowerCase().includes(selectedType.toLowerCase()) : true;
    return matchLocation && matchType;
  });

  return (
    <section id="biens" className="py-20 px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif text-[#f5ebd9] mb-8">
        Découvrez nos propriétés en vedette
      </h2>

      {filteredProperties.length === 0 ? (
        <p className="text-[#cccccc] text-sm py-8">Aucun bien ne correspond à vos critères de recherche.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} onSelect={setActiveProperty} />
          ))}
        </div>
      )}

      {/* Modale des détails */}
      {activeProperty && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0b261a] border border-[#e5c185]/40 rounded-3xl max-w-xl w-full p-6 relative shadow-2xl">
            <button 
              onClick={() => setActiveProperty(null)}
              className="absolute top-4 right-4 text-[#cccccc] hover:text-white text-lg font-bold w-8 h-8 rounded-full bg-[#030c08] flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
            <img src={activeProperty.imageUrl} alt={activeProperty.title} className="w-full h-64 object-cover rounded-2xl mb-4" />
            <h3 className="text-2xl font-serif text-[#e5c185] mb-2">{activeProperty.title}</h3>
            <p className="text-[#cccccc] text-xs mb-4">📍 {activeProperty.location}</p>
            <p className="text-[#f5ebd9] text-sm mb-6 leading-relaxed">{activeProperty.description}</p>
            
            <div className="flex items-center justify-between border-t border-[#112218] pt-4 mb-6 text-sm text-[#f5ebd9]">
              <span>Chambres : <strong>{activeProperty.bedrooms}</strong></span>
              <span>Salles de bain : <strong>{activeProperty.bathrooms}</strong></span>
              <span>Superficie : <strong>{activeProperty.area}</strong></span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#e5c185] font-bold text-lg">{activeProperty.price}</span>
              <Button variant="primary" onClick={() => alert('Demande de visite enregistrée !')}>
                Planifier une visite
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}