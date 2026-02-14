# Lúzerin - La Saga del Colibrí

Plataforma de lectura digital para la saga Lúzerin por N. de Monteagudo.

## 🚀 Características

- **Landing Interactivo**: Animación de profecía con transiciones suaves
- **Mapa de Navegación**: Mapa interactivo con carrusel de capítulos
- **Lector de Capítulos**: Experiencia de lectura optimizada con navegación entre capítulos
- **Glosario**: Búsqueda y filtrado de personajes, lugares y objetos
- **Modo Oscuro**: Soporte completo de temas claro/oscuro
- **Responsive**: Diseño adaptable a todos los dispositivos
- **SEO Optimizado**: Metadatos completos para redes sociales

## 📚 Contenido

- **Libro 1**: La Fortaleza del Colibrí (76 capítulos)
- **Libro 2**: El Tango de la Muerte (76 capítulos)
- **Total**: 152 capítulos, ~30,000 palabras

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Fuentes**: Montserrat, Roboto, Geist
- **Iconos**: Lucide React

## 🏃 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
Luzerin/
├── app/                    # Páginas y rutas de Next.js
│   ├── page.tsx           # Landing page
│   ├── mapa/              # Mapa de navegación
│   ├── lectura/           # Selector de libros y lector
│   └── glosario/          # Glosario de términos
├── components/            # Componentes React
│   ├── layout/           # Header, Footer, Navigation
│   ├── landing/          # Componentes del landing
│   ├── navigation/       # Mapa y carrusel
│   ├── reading/          # Lector de capítulos
│   └── glossary/         # Tarjetas y búsqueda
├── lib/                   # Utilidades y tipos
│   ├── content/          # Gestión de contenido
│   └── types/            # Definiciones TypeScript
├── data/                  # Datos JSON
│   ├── books/            # Libros parseados
│   └── glossary.json     # Glosario
└── public/               # Assets estáticos
    └── images/           # Imágenes del proyecto
```

## 🎨 Paleta de Colores

```css
--lz-prime: #401f71     /* Morado oscuro */
--lz-second: #824d74    /* Morado medio */
--lz-terc: #be7b72      /* Rosa */
--lz-cuart: #fdaf7b     /* Naranja */
```

## 🌐 Variables de Entorno

Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Para producción, cambia a tu dominio:

```env
NEXT_PUBLIC_SITE_URL=https://luzerin.com
```

## 📝 Desarrollo

### Agregar un Nuevo Capítulo

1. Agrega el contenido en formato Markdown a `.context/3.Client/Contenido/Textos/`
2. Ejecuta el script de parsing (si está disponible)
3. Los capítulos se cargan automáticamente desde `data/books/`

### Agregar Entrada al Glosario

Edita `data/glossary.json`:

```json
{
  "id": "personaje-id",
  "name": "Nombre del Personaje",
  "category": "character",
  "description": "Descripción detallada",
  "firstAppearance": "Capítulo X",
  "aliases": ["Alias 1", "Alias 2"]
}
```

## 🚢 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### Build Manual

```bash
npm run build
```

Los archivos estáticos se generan en `.next/`

## 📄 Licencia

Contenido © N. de Monteagudo. Todos los derechos reservados.

## 👥 Créditos

- **Autora**: N. de Monteagudo
- **Desarrollo**: Loxia AI Platform
- **Diseño**: Basado en los archivos originales HTML/CSS
