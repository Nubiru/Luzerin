"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-lz-second flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-3xl font-display font-bold text-lz-cuart mb-4">
          ¡Algo salió mal!
        </h2>
        <p className="text-white mb-8">
          Ocurrió un error inesperado. Por favor, intenta nuevamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="bg-lz-btn-teal hover:bg-lz-btn-darkest"
          >
            Intentar Nuevamente
          </Button>
          <Button
            onClick={() => window.location.href = "/"}
            variant="outline"
            size="lg"
          >
            Volver al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
