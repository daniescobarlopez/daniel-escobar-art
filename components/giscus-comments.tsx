"use client"

import Script from "next/script"

/**
 * Sección de comentarios con Giscus (GitHub Discussions).
 *
 * Configuración: añade estas variables en .env.local (obtén los valores en https://giscus.app):
 *
 *   NEXT_PUBLIC_GISCUS_REPO=usuario/repo
 *   NEXT_PUBLIC_GISCUS_REPO_ID=...
 *   NEXT_PUBLIC_GISCUS_CATEGORY=Comentarios
 *   NEXT_PUBLIC_GISCUS_CATEGORY_ID=...
 *
 * Si no están definidas, no se muestra el widget.
 */
export function GiscusComments() {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

  if (!repo || !repoId || !category || !categoryId) {
    return null
  }

  return (
    <section
      id="comentarios"
      className="pt-16 mt-16 border-t border-border"
      aria-label="Comentarios"
    >
      <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
        Comentarios
      </p>
      <Script
        src="https://giscus.app/client.js"
        data-repo={repo}
        data-repo-id={repoId}
        data-category={category}
        data-category-id={categoryId}
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="es"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
    </section>
  )
}
