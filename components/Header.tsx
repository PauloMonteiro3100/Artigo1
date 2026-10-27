import Link from "next/link";
import { links } from "../lib/links";

export default function Header() {
  return (
    <header className="border-b-2 border-ouro bg-vinho text-creme">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-serif text-xl font-semibold">
          Artigo 1º
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ouro">
              {l.texto}
            </Link>
          ))}
        </nav>

        <Link
          href="/login"
          className="rounded-md bg-ouro px-4 py-1.5 text-sm font-medium text-carvao hover:bg-creme"
        >
          Entrar
        </Link>
      </div>
    </header>
  );
}