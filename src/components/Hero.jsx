import { ArrowRight, Wrench, Cpu, Wifi, ChevronDown } from 'lucide-react'

const stats = [
  { value: '10+', label: 'År erfaring' },
  { value: '500+', label: 'Fornøyde kunder' },
  { value: '24t', label: 'Rask levering' },
  { value: '100%', label: 'Lokal ekspertise' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid + gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-transparent to-surface-950" />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Evjes ledende databutikk
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-up">
            Din lokale{' '}
            <span className="text-gradient">ekspert</span>
            <br />
            på data og IT
          </h1>

          {/* Sub */}
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '100ms' }}>
            Vi hjelper privatpersoner og bedrifter i Evje og Setesdal med PC-reparasjon,
            bygging av gaming-PCer, nettverk og alt innen IT-support.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-14 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5"
            >
              Kontakt oss
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#tjenester"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Se tjenester
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating service cards – desktop */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-3 w-64 animate-fade-in" style={{ animationDelay: '400ms' }}>
          {[
            { icon: Wrench, label: 'PC-reparasjon', sub: 'Rask og pålitelig', color: 'text-orange-400' },
            { icon: Cpu, label: 'Gaming-PCer', sub: 'Skreddersydd bygging', color: 'text-purple-400' },
            { icon: Wifi, label: 'Nettverk & WiFi', sub: 'Stabil dekning', color: 'text-cyan-400' },
          ].map(({ icon: Icon, label, sub, color }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-3 bg-surface-800/80 backdrop-blur border border-white/6 rounded-xl hover:border-brand-500/30 hover:-translate-x-1 transition-all duration-300"
            >
              <div className={`w-9 h-9 rounded-lg bg-surface-700 flex items-center justify-center ${color}`}>
                <Icon size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{label}</div>
                <div className="text-xs text-gray-500">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#tjenester"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-gray-400 transition-colors animate-bounce"
      >
        <span className="text-xs">Scroll ned</span>
        <ChevronDown size={16} />
      </a>
    </section>
  )
}
