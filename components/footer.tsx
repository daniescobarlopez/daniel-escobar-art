export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-lg text-foreground">
            Daniel Escobar López
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
