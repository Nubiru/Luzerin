import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-lz-prime mb-2">
              Lúzerin
            </h3>
            <p className="text-sm text-muted-foreground">
              La Saga del Colibrí
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Por N. de Monteagudo
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/mapa" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mapa
                </Link>
              </li>
              <li>
                <Link href="/lectura" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lectura
                </Link>
              </li>
              <li>
                <Link href="/glosario" className="text-muted-foreground hover:text-foreground transition-colors">
                  Glosario
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-3">Acerca de</h4>
            <p className="text-sm text-muted-foreground">
              Plataforma de lectura digital para la saga Lúzerin.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Lúzerin. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
