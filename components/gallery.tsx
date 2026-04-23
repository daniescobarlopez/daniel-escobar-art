"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export interface Artwork {
  id: string
  title: string
  description: string
  image: string
  year: string
  isLandscape?: boolean
}

const artworks: Artwork[] = [
  {
    id: "Catedral",
    title: "Catedral de Santa María la Real de la Almudena",
    description: "Volver al blanco y negro me está recordando algo importante: si el dibujo funciona, todo lo demás llega después.",
    image: "/MISIMAGENES/Catedral.jpg",
    year: "2026"
  },
  {
    id: "casa-balcon",
    title: "Fachadas de piedra",
    description: "Arquitectura tradicional donde la luz y la sombra danzan sobre las fachadas de piedra.",
    image: "/MISIMAGENES/casa-balcon.jpg",
    year: "2025"
  },
  {
    id: "casas-colgantes",
    title: "Casas Colgantes",
    description: "El vértigo de la arquitectura que desafía la gravedad, suspendida sobre el abismo.",
    image: "/MISIMAGENES/casas-colgantes.jpg",
    year: "2025"
  },
  {
    id: "maria",
    title: "María",
    description: "Perfil sereno que captura la esencia de la contemplación y la belleza silenciosa.",
    image: "/MISIMAGENES/maria.jpg",
    year: "2025"
  },
  {
    id: "tejados-torre",
    title: "Tejados y Torre",
    description: "Vista de tejados donde la arquitectura popular se encuentra con lo sagrado.",
    image: "/MISIMAGENES/tejados-torre.jpg",
    year: "2025",
    isLandscape: true
  },
  {
    id: "abuelo",
    title: "Mi Abuelo",
    description: "Retrato que celebra las arrugas del tiempo y la sabiduría de la experiencia.",
    image: "/MISIMAGENES/abuelo.jpg",
    year: "2025"
  },
  {
    id: "casas-piedra",
    title: "Carracedo de Compludo",
    description: "Una historia que contar.",
    image: "/MISIMAGENES/casas-piedra.jpg",
    year: "2025",
    isLandscape: true
  },
  {
    id: "figura-estudio",
    title: "Estudio de Figura",
    description: "Exploración anatómica donde las manos revelan la tensión y la vulnerabilidad del cuerpo.",
    image: "/MISIMAGENES/figura-estudio.jpg",
    year: "2013"
  }
]

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="obras" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Colección
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Obras Seleccionadas
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {artworks.map((artwork) => (
            <Link
              key={artwork.id}
              href={`/obra/${artwork.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <article className="space-y-5">
                {/* Artwork Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    fill
                    className={`object-cover transition-all duration-700 ${hoveredId === artwork.id ? "scale-105" : "scale-100"
                      }`}
                    unoptimized
                  />
                  <div className={`absolute inset-0 bg-foreground/5 transition-opacity duration-500 ${hoveredId === artwork.id ? "opacity-0" : "opacity-100"
                    }`} />
                </div>

                {/* Artwork Info */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                      {artwork.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {artwork.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
