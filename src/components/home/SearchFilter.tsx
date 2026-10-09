import  { useState } from 'react';
import { Button } from '../ui/Button';

interface SearchFilterProps {
  onSearch: (location: string, type: string) => void;
}

export function SearchFilter({ onSearch }: SearchFilterProps) {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('1 500 000 FCFA');

  const handleSearchClick = () => {
    onSearch(location, propertyType);
  };

  return (
    <div className="max-w-6xl mx-auto -mt-8 relative z-30 px-4">
      <div className="bg-[#0b261a] border border-[#e5c185]/30 p-6 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#cccccc] font-medium">Localisation</label>
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-[#030c08] border border-[#e5c185]/20 rounded-xl px-4 py-3 text-[#f5ebd9] text-sm focus:outline-none focus:border-[#e5c185]"
          >
            <option value="">Localisation</option>
            <option value="Dakar">Dakar</option>
            <option value="Sey">Sey, V1 Dakar</option>
            <option value="Patassu">Patassu</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#cccccc] font-medium">Type de bien</label>
          <select 
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="bg-[#030c08] border border-[#e5c185]/20 rounded-xl px-4 py-3 text-[#f5ebd9] text-sm focus:outline-none focus:border-[#e5c185]"
          >
            <option value="">Type de bien</option>
            <option value="Villa">Villa</option>
            <option value="Appartement">Appartement</option>
            <option value="Résidence">Résidence</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#cccccc] font-medium">Budget max (CFA)</label>
          <input 
            type="text" 
            value={budget} 
            onChange={(e) => setBudget(e.target.value)}
            className="bg-[#030c08] border border-[#e5c185]/20 rounded-xl px-4 py-3 text-[#f5ebd9] text-sm focus:outline-none focus:border-[#e5c185]" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs text-[#cccccc]">
            <span>Budget max</span>
          </div>
          <input 
            type="range" 
            min="500000" 
            max="500000000" 
            defaultValue="1500000"
            className="accent-[#e5c185] cursor-pointer w-full" 
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:col-span-5 pt-2 border-t border-[#e5c185]/10">
          <button className="text-xs text-[#f5ebd9] hover:underline flex items-center gap-1 cursor-pointer">
            🔍 Recherche avancée
          </button>
          <Button variant="primary" onClick={handleSearchClick} className="w-full md:w-auto px-8 py-3 font-bold tracking-wider text-[#030c08]">
            RECHERCHER
          </Button>
        </div>

      </div>
    </div>
  );
}