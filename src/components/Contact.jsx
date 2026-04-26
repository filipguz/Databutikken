import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const hours = [
  { day: 'Mandag – fredag', time: '09:00 – 17:00' },
  { day: 'Lørdag', time: '10:00 – 15:00' },
  { day: 'Søndag', time: 'Stengt' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="kontakt" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-brand-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ta kontakt i dag
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Gratis diagnose og uforpliktende prisestimat. Vi svarer raskt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            <a
              href="tel:+4738007700"
              className="flex items-center gap-4 p-5 bg-surface-800 border border-white/6 rounded-2xl hover:border-brand-500/30 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Telefon</div>
                <div className="text-base font-semibold text-white">38 00 77 00</div>
              </div>
              <ChevronRight size={16} className="text-gray-600 ml-auto group-hover:text-brand-400 transition-colors" />
            </a>

            <a
              href="mailto:post@databutikkenevje.no"
              className="flex items-center gap-4 p-5 bg-surface-800 border border-white/6 rounded-2xl hover:border-brand-500/30 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">E-post</div>
                <div className="text-sm font-semibold text-white">post@databutikkenevje.no</div>
              </div>
              <ChevronRight size={16} className="text-gray-600 ml-auto group-hover:text-brand-400 transition-colors" />
            </a>

            <div className="flex items-start gap-4 p-5 bg-surface-800 border border-white/6 rounded-2xl">
              <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Adresse</div>
                <div className="text-sm font-semibold text-white">Evjemoen, 4735 Evje</div>
                <div className="text-xs text-gray-500 mt-1">Evje og Hornnes kommune</div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 bg-surface-800 border border-white/6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-brand-400" />
                <span className="text-sm font-semibold text-white">Åpningstider</span>
              </div>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-gray-400">{h.day}</span>
                    <span className={`font-medium ${h.time === 'Stengt' ? 'text-gray-600' : 'text-white'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative h-40 bg-surface-800 border border-white/6 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-500">
                <div className="w-8 h-8 rounded-full bg-brand-600/20 border-2 border-brand-500/40 flex items-center justify-center animate-pulse">
                  <MapPin size={14} className="text-brand-400" />
                </div>
                <span className="text-xs font-medium">Evje, Setesdal</span>
                <a
                  href="https://maps.google.com/?q=Evje+og+Hornnes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-400 hover:text-brand-300 transition-colors underline underline-offset-2"
                >
                  Åpne i Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 bg-surface-800 border border-white/6 rounded-2xl h-full">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <Send size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Melding sendt!</h3>
                  <p className="text-gray-400 max-w-sm text-sm">
                    Takk for henvendelsen. Vi svarer deg vanligvis innen 1–2 timer i åpningstiden.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    className="mt-2 text-sm text-brand-400 hover:text-brand-300 transition-colors underline underline-offset-2"
                  >
                    Send ny melding
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-white mb-1">Send oss en melding</h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Beskriv hva du trenger hjelp med, så tar vi kontakt!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5">
                          Navn *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Ola Nordmann"
                          className="w-full px-4 py-2.5 bg-surface-700 border border-white/8 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-gray-400 mb-1.5">
                          Telefon
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="400 00 000"
                          className="w-full px-4 py-2.5 bg-surface-700 border border-white/8 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5">
                        E-post *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ola@eksempel.no"
                        className="w-full px-4 py-2.5 bg-surface-700 border border-white/8 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1.5">
                        Melding *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Beskriv hva du trenger hjelp med..."
                        className="w-full px-4 py-2.5 bg-surface-700 border border-white/8 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/25 hover:-translate-y-0.5"
                    >
                      <Send size={16} />
                      Send melding
                    </button>

                    <p className="text-xs text-gray-600 text-center">
                      Eller ring oss direkte på{' '}
                      <a href="tel:+4738007700" className="text-brand-400 hover:text-brand-300 transition-colors">
                        38 00 77 00
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
