

export function VirtualTourPlayer() {
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[#e5c185]/30 shadow-2xl bg-[#030c08] group">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" 
        alt="Villa SEYNA" 
        className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <button 
          aria-label="Lancer la visite virtuelle"
          className="w-20 h-20 rounded-full bg-[#e5c185] flex items-center justify-center shadow-lg shadow-black/50 hover:scale-110 transition-transform cursor-pointer"
        >
          <span className="text-[#030c08] text-2xl ml-1 font-bold">▶</span>
        </button>
        <span className="mt-4 text-[#f5ebd9] text-sm font-medium tracking-wide drop-shadow-md">
          Visite Virtuelle Interactive de la Villa SEYNA
        </span>
      </div>
    </div>
  );
}