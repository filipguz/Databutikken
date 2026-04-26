import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const navGroups = [
  {
    title: 'Tjenester',
    links: [
      { label: 'PC-reparasjon', href: '#tjenester' },
      { label: 'Gaming-PC bygging', href: '#tjenester' },
      { label: 'Nettverk & WiFi', href: '#tjenester' },
      { label: 'IT-support', href: '#tjenester' },
    ],
  },
  {
    title: 'Produkter',
    links: [
      { label: 'Gaming-PCer', href: '#produkter' },
      { label: 'Komponenter', href: '#produkter' },
      { label: 'Tilbehør', href: '#produkter' },
      { label: 'Bestilling', href: '#kontakt' },
    ],
  },
  {
    title: 'Informasjon',
    links: [
      { label: 'Hvorfor velge oss', href: '#hvorfor-oss' },
      { label: 'Kontakt', href: '#kontakt' },
      { label: 'Åpningstider', href: '#kontakt' },
      { label: 'Finn oss', href: '#kontakt' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5 w-fit">
              <img
                src="/logo.jpg"
                alt="Databutikken Evje logo"
                className="w-9 h-9 rounded-lg object-contain bg-white p-0.5"
              />
              <div className="leading-none">
                <span className="font-bold text-white text-base">Databutikken</span>
                <span className="block text-brand-400 text-xs font-medium tracking-widest uppercase">Evje</span>
              </div>
            </a>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Din lokale IT-ekspert i Evje og Setesdal. Vi tilbyr reparasjon, bygging og support
              for både privatpersoner og bedrifter.
            </p>

            {/* Contact quick */}
            <div className="space-y-2.5">
              <a href="tel:+4737931550" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
                <Phone size={14} className="text-brand-500 group-hover:text-brand-400" />
                37 93 15 50
              </a>
              <a href="mailto:post@dataevje.no" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
                <Mail size={14} className="text-brand-500 group-hover:text-brand-400" />
                post@dataevje.no
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin size={14} className="text-brand-500" />
                Nils Heglands veg 26, Evje
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-surface-700 hover:bg-brand-600 border border-white/6 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-surface-700 hover:bg-brand-600 border border-white/6 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-gray-300 tracking-widest uppercase mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {year} Databutikken Evje. Alle rettigheter forbeholdt.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Personvern</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
