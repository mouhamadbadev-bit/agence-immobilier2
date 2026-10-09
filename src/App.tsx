import  { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroBanner } from './components/home/HeroBanne';
import { SearchFilter } from './components/home/SearchFilter';
import { PropertyGrid } from './components/home/PropertyGrid';
import { StatsCounter } from './components/home/StatsCounter';
import { ServiceCard } from './components/home/ServicesCard';

export function App() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleSearch = (location: string, type: string) => {
    setSelectedLocation(location);
    setSelectedType(type);
  };

  return (
    <div id="accueil" className="min-h-screen bg-[#030c08] text-[#f5ebd9] font-sans selection:bg-[#e5c185] selection:text-[#030c08]">
      <Navbar />
      <main>
        <HeroBanner />
        <SearchFilter onSearch={handleSearch} />
        <PropertyGrid selectedLocation={selectedLocation} selectedType={selectedType} />
        <StatsCounter />
        <ServiceCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;