import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nós | Artigo 1º",
  description: "Conheça o propósito independente do Artigo 1º.",
};

export default function SobrePage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:py-16">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-bordo">Quem somos</p>
        <h1 className="font-serif text-4xl font-semibold text-vinho sm:text-5xl">Sobre nós</h1>
      </header>

      <div className="space-y-8 text-base leading-7">
        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Legislação sem complicação</h2>
          <p>
            Somos uma iniciativa independente que quer tornar a legislação brasileira
            mais direta, organizada e fácil de consultar. Nosso objetivo é ajudar as
            pessoas a encontrar o texto das normas sem excesso de ruído.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Independência e transparência</h2>
          <p>
            O Artigo 1º não é um órgão público, não representa governos ou tribunais e
            não é um canal oficial de publicação. Trabalhamos para facilitar o acesso
            a informações legislativas, preservando a distinção entre este projeto e
            as fontes oficiais.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Conteúdo informativo</h2>
          <p>
            O material do site tem finalidade informativa. Ele não substitui a
            consulta aos diários oficiais nem constitui aconselhamento jurídico.
            Quando disponível, indicamos a fonte oficial para que você possa
            conferir a publicação original.
          </p>
        </section>
      </div>
    </main>
  );
}
