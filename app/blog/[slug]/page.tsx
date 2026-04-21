import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
} from "@/lib/blog-posts"
import { BlogPost } from "@/components/blog-post"
import CusdisComments from "@/components/CusdisComments"

function getPostTitle(text: string): string {
  return text.split("\n")[0].trim() || "Entrada sin título"
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: "Entrada no encontrada | Daniel Escobar" }
  return {
    title: `${getPostTitle(post.text)} | Blog | Daniel Escobar`,
    description: getPostTitle(post.text),
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) notFound()

  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center">
            <Link
              href="/blog"
              className="group flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Volver al blog</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <BlogPost image={post.image} text={post.text} date={post.date} />
          <div className="mt-16">
            <CusdisComments key={slug} />
          </div>
        </div>
      </div>
    </main>
  )
}
