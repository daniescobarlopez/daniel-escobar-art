import Image from "next/image"

export function About() {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4752.JPG-MzBzQ9GMKIwy3u4tzr3840GRrSa9hj.jpeg"
              alt="Daniel Escobar López"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                Sobre mí
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
                Un regreso al arte
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-loose">
              <p className="font-serif text-xl text-foreground/90 leading-relaxed">
                Dejé el arte hace años para seguir otro camino.
              </p>
              <p className="text-muted-foreground">
                Pero no se me fue del corazón.
              </p>
              <p className="font-serif text-xl text-foreground/90 leading-relaxed">
                Hoy vuelvo, sin prisas, sin miedo.<br />
                Y quiero compartirlo contigo.
              </p>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-muted-foreground">
                  No soy artista, ni estudié Arte.<br />
                  Pero me apasiona.
                </p>
                <p className="text-muted-foreground mt-4">
                  Quiero volver a pintar, sí…<br />
                  Pero también entender qué es el arte, sus corrientes, sus genios, sus porqués.
                </p>
              </div>
              
              <p className="font-serif text-lg italic text-foreground pt-4">
                Este es mi cuaderno de aprendizajes, errores y descubrimientos.<br />
                ¿Aprendemos juntos?
              </p>
              
              <p className="text-2xl">
                🎨📚🖌️
              </p>
              
              <p className="text-sm text-muted-foreground/70 pt-4">
                Bachillerato de Artes · Instituto Las Américas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
