import Link from "next/link";
import { cacheLife } from "next/cache";
import { links } from "../lib/links";

export default async function Footer() {
  "use cache";
  cacheLife("days");

  return (
    <footer className="border-t border-ouro/50 bg-areia">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Artigo 1º</p>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-5 gap-y-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-vinho underline-offset-2 hover:underline">
              {l.texto}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}