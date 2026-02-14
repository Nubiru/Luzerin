import type { Metadata } from "next";

export const siteConfig = {
  name: "Lúzerin",
  description:
    "La Saga del Colibrí - Plataforma de lectura digital por N. de Monteagudo",
  url: "https://luzerin.com",
  ogImage: "/images/logos/Logo.jpeg",
  author: "N. de Monteagudo",
  keywords: [
    "Lúzerin",
    "saga",
    "colibrí",
    "fantasía",
    "magia",
    "hechicería",
    "libro digital",
    "e-book",
    "lectura online",
  ],
};

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description || siteConfig.description;
  const pageUrl = `${siteConfig.url}${path}`;
  const pageImage = image || siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
