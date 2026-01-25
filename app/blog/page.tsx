import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { blogPosts } from "@/lib/blog-posts"

function getPostTitle(text: string): string {
  return text.split("\n")[0].trim() || "Entrada sin título"
}

export const metadata = {
  title: "Blog | Daniel Escobar",
  description:
    "Cuaderno de aprendizajes, errores y descubrimientos artísticos. Reflexiones y experiencias sobre el arte.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Entradas
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="space-y-5">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {getPostTitle(post.text)}
                  </h2>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    {post.date}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </main>
  )
}
