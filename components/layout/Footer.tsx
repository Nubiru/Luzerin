import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/branding/logo.png"
                alt="Lúzerin Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-lz-prime">
                  Lúzerin
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  La Saga del Colibrí
                </p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Historia original por{" "}
              <span className="font-medium text-foreground">
                N. de Monteagudo
              </span>
              .
              <br />
              Todos los derechos reservados.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/mapa"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mapa
                </Link>
              </li>
              <li>
                <Link
                  href="/lectura"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lectura
                </Link>
              </li>
              <li>
                <Link
                  href="/glosario"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
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

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Lúzerin. La Saga del Colibrí.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidad"
              className="hover:text-foreground transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="hover:text-foreground transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
