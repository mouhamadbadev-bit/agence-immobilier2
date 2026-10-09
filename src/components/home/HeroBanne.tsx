
import { Button } from '../ui/Button';
import { VirtualTourPlayer } from './VirtualTourPlayer';

export function HeroBanner() {
  return (
    <section className="relative pt-12 pb-20 px-8 overflow-hidden bg-[#030c08]">
      {/* Motifs de lions sur les côtés comme sur l'image */}
      <div className="absolute top-10 -left-10 text-[#0b261a] text-[18rem] font-serif select-none pointer-events-none opacity-40">🦁</div>
      <div className="absolute top-10 -right-10 text-[#0b261a] text-[18rem] font-serif select-none pointer-events-none opacity-40">🦁</div>
      
      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <span className="text-xs uppercase tracking-widest text-[#e5c185] font-semibold mb-3 block">
          BIENVENUE CHEZ IMMO PRESTIGE
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-[#f5ebd9] max-w-3xl mx-auto mb-6 leading-tight">
          Vivez l'immobilier d'exception
        </h1>
        <p className="text-[#cccccc] text-base md:text-lg max-w-xl mx-auto mb-8 font-light">
          Trouvez la propriété d'architecte de vos rêves parmi nos exclusivités.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline">Découvrir nos exclusivités</Button>
          <Button variant="outline">Demander une consultation</Button>
        </div>
      </div>

      <div className="relative z-10">
        <VirtualTourPlayer />
      </div>
    </section>
  );
}