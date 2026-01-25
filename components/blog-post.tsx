import Image from "next/image"

export interface BlogPostProps {
  image: string
  text: string
  date: string
}

/**
 * Componente reutilizable para renderizar una entrada del blog.
 * Muestra la imagen destacada, el texto y la fecha con estilo minimalista.
 */
export function BlogPost({ image, text, date }: BlogPostProps) {
  return (
    <article className="space-y-10 lg:space-y-12">
      <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={image}
          alt="Imagen destacada de la entrada"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="space-y-8">
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line font-serif text-lg">
          {text}
        </p>
        <p className="text-sm tracking-widest uppercase text-muted-foreground pt-4 border-t border-border">
          {date}
        </p>
      </div>
    </article>
  )
}
