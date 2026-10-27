import BuscaComFiltro from "../components/BuscaComFiltro";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-[14vh]">
      <h1 className="font-serif text-6xl font-semibold text-vinho sm:text-7xl">Artigo 1º</h1>
      <p className="mt-3 text-center text-lg">Legislação brasileira, aberta e gratuita.</p>
      <div className="mt-10 flex w-full justify-center">
        <BuscaComFiltro />
      </div>
    </main>
  );
}