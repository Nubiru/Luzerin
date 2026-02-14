import { Book, Home, Map as MapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-lz-second flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-9xl font-display font-bold text-lz-cuart mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-lz-terc mb-6">
          Página No Encontrada
        </h2>
        <p className="text-lg text-white mb-12">
          La página que buscas no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-lz-btn-teal hover:bg-lz-btn-darkest"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Volver al Inicio
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/mapa">
              <MapIcon className="mr-2 h-5 w-5" />
              Ir al Mapa
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/lectura">
              <Book className="mr-2 h-5 w-5" />
              Ver Libros
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
