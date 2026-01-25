export interface BlogPost {
  slug: string
  image: string
  text: string
  date: string
}

/**
 * Entradas del blog. Añade aquí nuevas entradas manteniendo el mismo formato.
 * El slug se usa en la URL: /blog/[slug]
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "perdiendo-el-miedo",
    image: "/images/blog/foto1.jpg",
    text: `Perdiendo el miedo 🎨

Llevaba sin pintar al natural con óleo por lo menos 16 años, desde que estudiaba Bachillerato de Artes.
Como muchos sabéis, después de un parón artístico de muchos años he decidido retomar la pintura y, para ello, qué mejor manera que salir de mi zona de confort y enfrentarme a mis miedos e inseguridades.

Decidí apuntarme a un taller de pintura al natural sin saber muy bien cómo iba a ir la experiencia, con la mente abierta, como principiante, y reaprendiendo desde cero de la mano de un maestro.

Muchas gracias, @cesargonzalezpintor , por tu paciencia y todo lo que nos has enseñado durante este taller. Estoy muy contento con lo aprendido y me llevo una experiencia única.
No me esperaba que, a mi edad, estaría pintando al natural con compañeros tan diversos… ¡como aquel chaval de 17 años!

No solo me llevo lo aprendido, sino también el haber conocido a personas maravillosas como Conchi, Alonso y Cipriano, con quienes nos hemos echado unas buenas risas en el proceso.

A pesar de sentirme un poco oxidado, estoy contento con el resultado.
🧡`,
    date: "11/02/2025",
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
