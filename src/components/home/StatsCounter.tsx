

export function StatsCounter() {
  const stats = [
    { label: 'Années', value: '10+' },
    { label: 'Biens', value: '500+' },
    { label: 'Clients', value: '1000+' },
    { label: 'Prix', value: '5' }
  ];

  return (
    <section className="py-12 border-y border-[#e5c185]/10 bg-[#030c08] px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif font-bold text-[#e5c185] mb-1">{stat.value}</span>
            <span className="text-xs uppercase tracking-widest text-[#cccccc]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}