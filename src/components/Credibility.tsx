export default function Credibility() {
  const brands = [
    { name: 'Clínica Saúde+' },
    { name: 'Studio Move' },
    { name: 'Barber King' },
    { name: 'AgênciaPro' },
    { name: 'Dr. Consultas' },
    { name: 'Fit Studio' }
  ];

  return (
    <section id="credibilidade" className="py-12 bg-bgAlt border-y border-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center reveal">
        
        {/* Caption text */}
        <p className="text-xs uppercase tracking-wider font-extrabold text-blue-600 mb-6">
          CONFIADO POR AGÊNCIAS, CLÍNICAS, ESTÚDIOS E PROFISSIONAIS EM TODO O BRASIL
        </p>

        {/* Placeholders Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="bg-white rounded-xl px-6 py-3.5 shadow-sm border border-border text-ink font-bold text-sm tracking-tight hover:scale-105 hover:shadow-md transition-all duration-200"
            >
              <span className="opacity-80">{brand.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
