"use client"

import { useEffect, useRef, useState } from "react"

export default function CusdisComments() {
  const divRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  const pageId = typeof window !== "undefined" ? window.location.pathname : ""
  const pageUrl = typeof window !== "undefined" ? window.location.href : ""
  const pageTitle = typeof document !== "undefined" ? document.title : ""

  const host = "https://cusdis.com"
  const appId = "bc960962-9845-45e0-b446-294d2dd13361"

  // Load script once
  useEffect(() => {
    if (document.getElementById("cusdis-script")) {
      setMounted(true)
      return
    }

    const script = document.createElement("script")
    script.id = "cusdis-script"
    script.src = `${host}/js/cusdis.es.js`
    script.async = true
    script.defer = true
    script.onload = () => setMounted(true)
    document.body.appendChild(script)
  }, [])

  // Render/Update comments when page changes or script loads
  useEffect(() => {
    if (mounted && window.renderCusdis && divRef.current) {
      // Clear previous content if any to avoid duplicates (though renderCusdis might handle it)
      divRef.current.innerHTML = ""
      window.renderCusdis(divRef.current)
    }
  }, [mounted, pageId])

  // Manual resize listener as backup
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== host) return
      try {
        const data = JSON.parse(e.data)
        if (data.from === "cusdis" && data.event === "resize") {
          const iframe = divRef.current?.querySelector("iframe")
          if (iframe) {
            iframe.style.height = `${data.data}px`
          }
        }
      } catch (e) {
        // ignore
      }
    }
    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <div className="mt-16 w-full">
      <div
        ref={divRef}
        id="cusdis_thread"
        data-host={host}
        data-app-id={appId}
        data-page-id={pageId}
        data-page-url={pageUrl}
        data-page-title={pageTitle}
        style={{ width: "100%", minHeight: "150px" }}
      ></div>
    </div>
  )
}

declare global {
  interface Window {
    renderCusdis?: (el: HTMLElement) => void
  }
}
