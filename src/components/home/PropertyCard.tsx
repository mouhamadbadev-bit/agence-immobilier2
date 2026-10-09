
import {type  Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

export function PropertyCard({ property, onSelect }: PropertyCardProps) {
  return (
    <div 
      onClick={() => onSelect(property)}
      className="bg-neutral-900 border border-amber-500/20 rounded-2xl overflow-hidden group hover:border-amber-400/50 transition-all duration-300 flex flex-col cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col grow justify-between">
        <div>
          <h3 className="text-neutral-100 font-serif font-medium text-base mb-1">{property.title}</h3>
          <p className="text-neutral-400 text-xs mb-4">{property.location}</p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs text-neutral-300">
          <div className="flex items-center gap-3">
            <span>🛏️ {property.bedrooms}</span>
            <span>🛁 {property.bathrooms}</span>
            <span>📐 {property.area}</span>
          </div>
          <span className="text-amber-400 font-semibold">{property.price}</span>
        </div>
      </div>
    </div>
  );
}