import { Mail, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Contacto
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Hablemos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Si quieres compartir impresiones, sugerencias o simplemente saludar, 
            me encantará leerte.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="mailto:daniescobarlopez@gmail.com"
              className="group flex items-center gap-3 text-foreground transition-opacity hover:opacity-70"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm tracking-wide">daniescobarlopez@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/danielescobarte/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground transition-opacity hover:opacity-70"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm tracking-wide">@danielescobarte</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
