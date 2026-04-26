import { Wrench, Cpu, Wifi, HeadphonesIcon, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'PC-reparasjon',
    description:
      'Har PCen din krasjet, blitt treg, eller fått virus? Vi diagnostiserer og fikser problemet raskt – ofte samme dag.',
    features: ['Virusfjerning', 'Hardwarebytte', 'Datarekonstruksjon', 'OS-reinstallering'],
    accent: 'from-orange-500/20 to-orange-600/5',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    borderHover: 'hover:border-orange-500/30',
  },
  {
    icon: Cpu,
    title: 'Gaming-PC bygging',
    description:
      'Vi bygger din drømmemachine fra bunnen av – tilpasset ditt budsjett og dine behov, med topp komponenter.',
    features: ['Gratis rådgivning', 'Komponentvalg', 'Kabelmanagement', 'Ytelsestest'],
    accent: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    borderHover: 'hover:border-purple-500/30',
  },
  {
    icon: Wifi,
    title: 'Nettverk & WiFi',
    description:
      'Sett opp trådløst nettverk, mesh-systemer eller sikre bedriftsnett. Vi sikrer stabil og rask internettilgang.',
    features: ['Mesh WiFi-oppsett', 'Nettverkssikkerhet', 'VPN-konfigurering', 'Feilsøking'],
    accent: 'from-cyan-500/20 to-cyan-600/5',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    borderHover: 'hover:border-cyan-500/30',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support – privat & bedrift',
    description:
      'Skreddersydd IT-hjelp for hjemmebrukere og bedrifter. Fast avtale, telefon og drop-in – vi er der når du trenger oss.',
    features: ['Fast IT-avtale', 'Telefonsupport', 'Drop-in hjelp', 'Fjernhjelp'],
    accent: 'from-brand-500/20 to-brand-600/5',
    iconColor: 'text-brand-400',
    iconBg: 'bg-brand-500/10',
    borderHover: 'hover:border-brand-500/30',
  },
]

export default function Services() {
  return (
    <section id="tjenester" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Tjenester
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Alt du trenger – på ett sted
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fra enkle reparasjoner til komplekse nettverksoppsett. Vi har kompetansen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`group relative p-6 bg-surface-800 border border-white/6 rounded-2xl ${s.borderHover} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 overflow-hidden`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative">
                  <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center mb-4 ${s.iconColor}`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className={`w-1.5 h-1.5 rounded-full ${s.iconColor} bg-current flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#kontakt"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${s.iconColor} hover:gap-2.5 transition-all duration-200`}
                  >
                    Bestill time <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
