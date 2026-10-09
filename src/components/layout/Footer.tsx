

export function Footer() {
  return (
    <footer className="w-full bg-[#030c08] border-t border-[#e5c185]/10 py-12 px-8 text-[#888888] text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🦁</span>
            <span className="font-serif tracking-widest text-[#e5c185] font-bold">IMMO PRESTIGE</span>
          </div>
          <p className="text-xs text-[#888888] leading-relaxed">
            Trouvez la propriété d'architecte de vos rêves parmi nos exclusivités.
          </p>
        </div>
        <div>
          <h4 className="text-[#e5c185] font-medium mb-3">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#accueil" className="hover:text-[#e5c185]">Accueil</a></li>
            <li><a href="#apropos" className="hover:text-[#e5c185]">À propos</a></li>
            <li><a href="#biens" className="hover:text-[#e5c185]">Biens</a></li>
            <li><a href="#blog" className="hover:text-[#e5c185]">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#e5c185] font-medium mb-3">Légal</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#mentions" className="hover:text-[#e5c185]">Mentions légales</a></li>
            <li><a href="#confidentialite" className="hover:text-[#e5c185]">Politique de confidentialité</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#e5c185] font-medium mb-3">Contact</h4>
          <p className="text-xs">Dakar, Sénégal</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 border-t border-[#112218] text-center text-xs text-[#888888]">
        © {new Date().getFullYear()} Immo Prestige, l'excellence immobilière. Tous droits réservés.
      </div>
    </footer>
  );
}