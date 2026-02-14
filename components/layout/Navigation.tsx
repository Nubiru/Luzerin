"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/mapa", label: "Mapa" },
  { href: "/lectura", label: "Lectura" },
  { href: "/glosario", label: "Glosario" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-display text-2xl font-bold text-lz-prime flex items-center gap-2"
          >
            <Image
              src="/images/branding/logo.png"
              alt="Lúzerin Logo"
              width={128}
              height={32}
              className="h-8 w-auto"
            />
            <span className="hidden sm:inline">Lúzerin</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    size="sm"
                  >
                    {item.label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
