export default function Loading() {
  return (
    <div className="min-h-screen bg-lz-second flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-lz-cuart border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-display font-bold text-lz-cuart mb-2">Cargando...</h2>
        <p className="text-lz-terc">Preparando tu experiencia de lectura</p>
      </div>
    </div>
  );
}
