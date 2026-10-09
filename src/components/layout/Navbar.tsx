
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <header className="w-full py-6 px-8 flex items-center justify-between border-b border-[#e5c185]/10 backdrop-blur-md sticky top-0 z-50 bg-[#030c08]">
      <div className="flex items-center gap-3">
        <span className="text-2xl" role="img" aria-label="Lion Logo">🦁</span>
        <span className="font-serif tracking-widest text-[#e5c185] font-bold text-lg">IMMO PRESTIGE</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm text-[#f5ebd9]">
        <a href="#accueil" className="text-[#e5c185] font-medium hover:text-[#f5ebd9] transition-colors">Accueil</a>
        <a href="#apropos" className="hover:text-[#e5c185] transition-colors">À propos</a>
        <a href="#biens" className="hover:text-[#e5c185] transition-colors">Biens</a>
        <a href="#services" className="hover:text-[#e5c185] transition-colors">Services</a>
        <a href="#blog" className="hover:text-[#e5c185] transition-colors">Blog</a>
        <a href="#contact" className="hover:text-[#e5c185] transition-colors">Contact</a>
      </nav>

      <div className="flex items-center gap-6">
        <a href="#compte" className="text-sm text-[#f5ebd9] hover:text-[#e5c185] transition-colors">Mon compte</a>
        <Button variant="gold" className="text-xs py-2.5 px-5">Planifiez une visite</Button>
      </div>
    </header>
  );
}