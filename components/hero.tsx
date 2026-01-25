"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-widest uppercase text-muted-foreground">
                Arte y Aprendizaje
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground text-balance">
                Daniel Escobar 
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md font-light italic">
              &quot;Dejé el arte hace años. Hoy vuelvo, sin prisas, sin miedo.&quot;
            </p>
            <a
              href="#obras"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-foreground transition-opacity hover:opacity-70 group"
            >
              <span>Explorar obras</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          {/* Featured Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abuelo-9t3c2Wsndr60aBRbASLUqU26I8wiRI.jpg"
                alt="Obra destacada de Daniel Escobar López"
                fill
                className="object-cover leading-3 mx-0 opacity-100"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
