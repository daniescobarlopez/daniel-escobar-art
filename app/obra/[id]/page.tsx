import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface Artwork {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  year: string
  technique: string
  dimensions: string
  /** Mensaje de disponibilidad (ej. "Obra no disponible", "Obra disponible", "Reservada"). */
  availabilityText: string
  /** "landscape" para imágenes horizontales (se ve completa); "portrait" por defecto. */
  imageAspect?: "portrait" | "landscape"
}

const artworks: Artwork[] = [
  {
    id: "casa-balcon",
    title: "Casa con Balcón",
    description: "Arquitectura tradicional donde la luz y la sombra danzan sobre las fachadas de piedra.",
    fullDescription: "Esta obra captura la esencia de la arquitectura popular española, donde cada balcón cuenta una historia de vidas vividas. El carboncillo permite explorar los contrastes dramáticos entre la luz mediterránea y las sombras profundas que se proyectan sobre la piedra antigua. Los detalles arquitectónicos revelan el paso del tiempo y la belleza de lo cotidiano.",
    image: "/MISIMAGENES/casa-balcon.jpg",
    year: "2025",
    technique: "Carboncillo sobre papel",
    dimensions: "50 × 70 cm",
    availabilityText: "Obra no disponible"
  },
  {
    id: "casas-colgantes",
    title: "Casas Colgantes",
    description: "El vértigo de la arquitectura que desafía la gravedad, suspendida sobre el abismo.",
    fullDescription: "Inspirada en las famosas Casas Colgadas de Cuenca, esta obra explora la relación entre la arquitectura humana y el paisaje natural. Las construcciones parecen desafiar las leyes de la física, aferrándose al precipicio con una determinación que habla de la audacia de quienes las construyeron. El carboncillo permite capturar la textura de la roca y la madera envejecida.",
    image: "/MISIMAGENES/casas-colgantes.jpg",
    year: "2025",
    technique: "Carboncillo sobre papel",
    dimensions: "60 × 80 cm",
    availabilityText: "Obra disponible"
  },
  {
    id: "maria",
    title: "María",
    description: "Perfil sereno que captura la esencia de la contemplación y la belleza silenciosa.",
    fullDescription: "Este retrato de perfil busca capturar no solo los rasgos físicos, sino el mundo interior de la persona retratada. La mirada perdida en el horizonte sugiere pensamientos profundos y una serenidad que solo se alcanza en momentos de verdadera introspección. El trabajo de luces y sombras en el cabello y los rasgos faciales crea una atmósfera íntima y contemplativa.",
    image: "/MISIMAGENES/maria.jpg",
    year: "2025",
    technique: "Carboncillo sobre papel",
    dimensions: "40 × 50 cm",
    availabilityText: "Obra no disponible"
  },
  {
    id: "figura-estudio",
    title: "Estudio de Figura",
    description: "Exploración anatómica donde las manos revelan la tensión y la vulnerabilidad del cuerpo.",
    fullDescription: "Este estudio de figura explora la anatomía humana a través de la técnica sanguina, capturando la tensión muscular y la delicadeza de las manos en un gesto introspectivo. Los tonos cálidos del papel y los pigmentos rojizos crean una atmósfera íntima que evoca los estudios clásicos del Renacimiento. La composición fragmentada invita al espectador a completar mentalmente la figura, participando activamente en la obra.",
    image: "/MISIMAGENES/figura-estudio.jpg",
    year: "2013",
    technique: "Sanguina y tiza blanca sobre papel",
    dimensions: "50 × 65 cm",
    availabilityText: "Obra no disponible"
  },
  {
    id: "tejados-torre",
    title: "Tejados y Torre",
    description: "Vista de tejados donde la arquitectura popular se encuentra con lo sagrado.",
    fullDescription: "Desde las alturas, los tejados de un pueblo castellano se convierten en un mar de texturas y formas geométricas. La torre de la iglesia emerge como punto focal, conectando lo terrenal con lo espiritual. El cielo dramático añade una dimensión casi teatral a la escena, mientras que el detalle minucioso de las tejas y ventanas revela la vida que bulle bajo cada techo.",
    image: "/MISIMAGENES/tejados-torre.jpg",
    year: "2025",
    technique: "Carboncillo sobre papel",
    dimensions: "50 × 70 cm",
    availabilityText: "Obra no disponible"
  },
  {
    id: "abuelo",
    title: "Mi Abuelo",
    description: "Retrato que celebra las arrugas del tiempo y la sabiduría de la experiencia.",
    fullDescription: "Siempre me dio mucho vértigo hacer retratos… por si no se parece, si no transmito el gesto o las expresiones. Esa mofa silenciosa que hay detrás de un retrato mal logrado.La teoría parece sencilla: que se parezca a la persona que retratas. Pero en la práctica… ya es otro cantar. Por eso sabía que para mi primer retrato necesitaba algo que me motivase de verdad, que me hiciera pasar horas encajando y tomando buenas decisiones desde el principio. Con muchísimo cariño, este retrato va dedicado a mi abuelo Martín, por su 87 cumpleaños. Todo un titán, un referente del saber estar, siempre con una sonrisa y bromeando incluso en los peores momentos. Te quiero mucho abuelo.",
    image: "/MISIMAGENES/abuelo.jpg",
    year: "2025",
    technique: "Carboncillo sobre papel",
    dimensions: "45 × 60 cm",
    availabilityText: "Obra disponible"
  },
  {
    id: "casas-piedra",
    title: "Carracedo de Compludo",
    description: "Una historia que contar.",
    fullDescription: "En lo más recóndito del interior de León está Carracedo de Compludo.\n16 habitantes.\n9 hombres.\n7 mujeres.\n\nNos levantamos temprano. A cuatro kilómetros del pueblo, siguiendo un sendero apenas transitado, cubierto de maleza tan alta como yo, llegamos a la cascada de Gualtón. Uno de esos lugares que no se explican, se sienten. Sabes que son mágicos nada más pisarlos.\n\nDe vuelta, María cae por un terraplén lleno de zarzas. Su cabeza queda a la altura de mis pies. La saco de ahí casi como si arrancara una mandrágora de la tierra. Tuve miedo. Mucho miedo.\nPor suerte, solo fue un susto.\n\nRecorremos el pueblo en silencio. No se oye nada.\nAl llegar a la última casa, un mastín ladra. Una chica, sentada junto a él, me sonríe y me saluda. Se la veía feliz. Con su perro. En su aldea. Muy feliz. Me acordé del mío. Le echo tanto de menos.\n\nVolvemos a la furgoneta, cocinamos algo y descansamos antes de continuar el viaje.\nEntonces vemos una familia: una pareja con su hija y dos personas mayores, los abuelos.\n\n—Tened buen viaje.\n—Gracias.\n—Avisad cuando lleguéis.\n—Vale, mamá.\n—Venid más a menudo, que veamos más a la niña.\n—Vale.\n\nDos besos. Se marchan.\n\nEl abuelo se gira hacia su mujer y le dice, casi en un susurro:\n—Ahí se va todo lo que tienes. Todo.\n\nElla no contesta.\nÉl repite:\n—Ahí se va todo lo que tienes. Todo. Ni casas, ni tierras, ni nada.\n\n—Ya lo sé… ya lo sé —responde ella.\n\nY el pueblo vuelve a quedarse en silencio.\n\nA veces el tiempo no avisa.\nSe lleva a la gente, las voces, las costumbres… incluso los lugares.\nPensamos que siempre habrá un \"luego\", un \"otro día\", un \"cuando tengamos tiempo\".\nPero hay cosas —la familia, las relaciones, las amistades, la memoria, los pueblos— que, si no se cuidan a tiempo, se van sin hacer ruido.",
    image: "/MISIMAGENES/casas-piedra.jpg",
    year: "2025",
    technique: "Carboncillo sobre papel",
    dimensions: "55 × 75 cm",
    availabilityText: "Obra disponible",
    imageAspect: "landscape"
  },
]

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    id: artwork.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const artwork = artworks.find((a) => a.id === id)
  
  if (!artwork) {
    return {
      title: "Obra no encontrada",
    }
  }

  return {
    title: `${artwork.title} | Daniel Escobar`,
    description: artwork.description,
  }
}

export default async function ArtworkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const artwork = artworks.find((a) => a.id === id)

  if (!artwork) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center">
            <Link
              href="/#obras"
              className="group flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Volver a obras</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Artwork Content */}
      <div className="pt-32 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Artwork Image */}
            <div
              className={`relative overflow-hidden bg-muted lg:sticky lg:top-32 ${
                artwork.imageAspect === "landscape" ? "aspect-[16/10]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.title}
                fill
                className={
                  artwork.imageAspect === "landscape"
                    ? "object-contain"
                    : "object-cover"
                }
                priority
                unoptimized
              />
            </div>

            {/* Artwork Info */}
            <div className="space-y-8 lg:py-8">
              <div>
                <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                  {artwork.year}
                </p>
                
                <p className="font-serif text-xl italic text-muted-foreground leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              <div className="h-px bg-border" />

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {artwork.fullDescription}
                </p>
              </div>

              <div className="h-px bg-border" />

              <dl className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-muted-foreground mb-1">Técnica</dt>
                  <dd className="text-foreground">{artwork.technique}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Dimensiones</dt>
                  <dd className="text-foreground">{artwork.dimensions}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Año</dt>
                  <dd className="text-foreground">{artwork.year}</dd>
                </div>
              </dl>

              <div className="h-px bg-border" />

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  {artwork.availabilityText}
                </p>
                <a
                  href={`mailto:daniescobarlopez@gmail.com?subject=Consulta sobre: ${encodeURIComponent(artwork.title)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm tracking-wide transition-opacity hover:opacity-90"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
