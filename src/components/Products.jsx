import { Gamepad2, CircuitBoard, Mouse, ArrowRight, Tag } from 'lucide-react'

const categories = [
  {
    icon: Gamepad2,
    title: 'Gaming-PCer',
    description: 'Ferdigbygde og skreddersydde gaming-maskiner klar til spilling.',
    items: ['Starter-gaming PC fra 8 990,-', 'Mid-range fra 14 990,-', 'High-end fra 24 990,-', 'Custom build – ditt budsjett'],
    cta: 'Konfigurer din PC',
    color: 'text-purple-400',
    bg: 'bg-purple-500/8',
    border: 'border-purple-500/15',
    hoverBorder: 'hover:border-purple-500/40',
    badge: 'Populær',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/20',
  },
  {
    icon: CircuitBoard,
    title: 'Komponenter',
    description: 'CPU, GPU, RAM, SSD og mer fra ledende merker til konkurransedyktige priser.',
    items: ['Prosessorer (Intel/AMD)', 'Grafikkort (NVIDIA/AMD)', 'SSD og lagring', 'RAM og minnemoduler'],
    cta: 'Se komponenter',
    color: 'text-brand-400',
    bg: 'bg-brand-500/8',
    border: 'border-brand-500/15',
    hoverBorder: 'hover:border-brand-500/40',
    badge: null,
    badgeColor: '',
  },
  {
    icon: Mouse,
    title: 'Tilbehør',
    description: 'Alt av periferiutstyr og tilbehør for kontor og gaming.',
    items: ['Gaming-mus og tastatur', 'Skjermer 24"–32"', 'Headset og lyd', 'Kabler, hubs og adaptere'],
    cta: 'Se tilbehør',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/8',
    border: 'border-cyan-500/15',
    hoverBorder: 'hover:border-cyan-500/40',
    badge: 'Ny vare',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/20',
  },
]

export default function Products() {
  return (
    <section id="produkter" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Produkter
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Utstyr for alle behov
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            Vi har et stort sortiment av datautstyr og kan bestille det meste på kort varsel.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className={`relative p-6 bg-surface-800 border ${cat.border} ${cat.hoverBorder} rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
              >
                {cat.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full border ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                )}

                <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mb-5 ${cat.color}`}>
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{cat.description}</p>

                <ul className="space-y-2 mb-6">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Tag size={12} className={`${cat.color} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${cat.color} hover:gap-3 transition-all duration-200`}
                >
                  {cat.cta} <ArrowRight size={15} />
                </a>
              </div>
            )
          })}
        </div>

        {/* Banner */}
        <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-900/60 via-brand-800/40 to-surface-800 border border-brand-500/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Finner du ikke det du leter etter?
              </h3>
              <p className="text-sm text-gray-400">
                Vi bestiller nesten alt og kan hjelpe deg med å finne riktig produkt til riktig pris.
              </p>
            </div>
            <a
              href="#kontakt"
              className="flex-shrink-0 px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/25"
            >
              Spør oss
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
