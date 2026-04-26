import { ArrowRight, ChevronDown, MapPin } from 'lucide-react'

const stats = [
  { value: '30+', label: 'År i bransjen' },
  { value: '1000+', label: 'Fornøyde kunder' },
  { value: 'Sentrum', label: 'Evje sentrum' },
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
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left – text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              Data- og telebutikk i Evje sentrum
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-up">
              Din lokale{' '}
              <span className="text-gradient">ekspert</span>
              <br />
              på data og IT
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-lg animate-fade-up" style={{ animationDelay: '100ms' }}>
              Vi hjelper privatpersoner og bedrifter i Evje og Setesdal med PC-reparasjon,
              bygging av gaming-PCer, nettverk og alt innen IT-support.
            </p>

            <div className="flex flex-wrap gap-3 mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – store photo */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '350ms' }}>
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-brand-600/10 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">
                <img
                  src="/utsiden.jpg"
                  alt="Databutikken Evje – butikkfasade i Evje sentrum"
                  className="w-full h-80 object-cover object-center"
                />
                {/* Overlay gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/70 via-transparent to-transparent" />

                {/* Location badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-surface-900/90 backdrop-blur rounded-xl border border-white/10">
                  <MapPin size={14} className="text-brand-400" />
                  <span className="text-xs font-medium text-white">Nils Heglands veg 26, Evje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
