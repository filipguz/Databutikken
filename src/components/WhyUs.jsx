import { MapPin, Zap, Heart, ShieldCheck, Star, Users } from 'lucide-react'

const reasons = [
  {
    icon: MapPin,
    title: 'Lokal ekspertise',
    description:
      'Vi kjenner Evje og Setesdal. Som lokal aktør er vi raskt tilgjengelig og forstår behovene i nærområdet.',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
  },
  {
    icon: Zap,
    title: 'Rask service',
    description:
      'Mange reparasjoner løses samme dag. Vi vet at tid er penger – og at du trenger PCen din tilbake.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Heart,
    title: 'Personlig oppfølging',
    description:
      'Du snakker alltid med en ekte tekniker – ikke en bot. Vi forklarer problemet og løsningen på vanlig norsk.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Garanti på arbeid',
    description:
      'Vi stiller garanti på alle reparasjoner og installasjoner. Ikke fornøyd? Vi fikser det uten ekstra kostnad.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Star,
    title: 'Konkurransedyktige priser',
    description:
      'Rettferdige priser uten skjulte kostnader. Gratis diagnose og prisestimat før vi starter arbeidet.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Users,
    title: 'For alle',
    description:
      'Fra pensjonister med ny iPad til bedrifter med 50 ansatte – vi tilpasser servicen til deg.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
]

const testimonials = [
  {
    name: 'Anne K.',
    text: 'Reparerte laptopen min på én dag. Utrolig service og veldig hyggelig betjening!',
    stars: 5,
  },
  {
    name: 'Olav M.',
    text: 'Bygde gaming-PC til sønnen min. Fikk god rådgivning og topp kvalitet til riktig pris.',
    stars: 5,
  },
  {
    name: 'Setesdal Regnskap AS',
    text: 'Har hatt fast IT-avtale i to år. Alltid tilgjengelig og profesjonell – anbefales!',
    stars: 5,
  },
]

export default function WhyUs() {
  return (
    <section id="hvorfor-oss" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Hvorfor velge oss
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Lokal. Rask. Personlig.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Vi er ikke en nettbutikk eller et callcenter. Vi er dine naboer i Evje.
          </p>
        </div>

        {/* Reasons + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20 items-start">
          {/* Reasons grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r) => {
              const Icon = r.icon
              return (
                <div
                  key={r.title}
                  className="group p-6 bg-surface-800/60 border border-white/6 rounded-2xl hover:border-white/12 hover:bg-surface-800 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className={`w-10 h-10 rounded-xl ${r.bg} flex items-center justify-center mb-4 ${r.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{r.description}</p>
                </div>
              )
            })}
          </div>

          {/* Interior photo */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">
              <img
                src="/bilde01.jpg"
                alt="Inne i Databutikken Evje – retroutstyr og datamaskiner"
                className="w-full h-full object-cover object-center"
                style={{ minHeight: '420px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs text-brand-400 font-semibold tracking-widest uppercase mb-1">Inne i butikken</p>
                <p className="text-sm text-gray-300 leading-snug">
                  Fra retro til moderne – vi har utstyr og kunnskap for alle behov.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="border-t border-white/5 pt-16">
          <h3 className="text-center text-lg font-semibold text-gray-300 mb-10">
            Hva kundene sier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-5 bg-surface-800/40 border border-white/6 rounded-2xl"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed mb-3">"{t.text}"</p>
                <p className="text-xs font-semibold text-gray-500">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
