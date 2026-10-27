import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Artigo 1º",
  description: "Condições de uso e limites do conteúdo informativo do Artigo 1º.",
};

export default function TermosPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:py-16">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-bordo">Leia antes de usar</p>
        <h1 className="font-serif text-4xl font-semibold text-vinho sm:text-5xl">Termos de Uso</h1>
        <p className="mt-3 text-sm text-carvao/70">Última atualização: 27 de outubro de 2026</p>
      </header>

      <div className="space-y-8 text-base leading-7">
        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Finalidade do site</h2>
          <p>
            O Artigo 1º é uma iniciativa independente para facilitar a consulta a
            textos legislativos. O conteúdo é informativo e não constitui
            aconselhamento jurídico, parecer ou orientação para um caso concreto.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Atos oficiais e republicação</h2>
          <p>
            A publicação de textos de atos normativos no site se baseia no art. 8º,
            inciso IV, da{" "}
            <a
              href="https://www.planalto.gov.br/ccivil_03/leis/l9610.htm"
              target="_blank"
              rel="noreferrer"
              className="text-vinho underline underline-offset-2"
            >
              Lei nº 9.610/1998 (Lei de Direitos Autorais)
            </a>, que estabelece:
          </p>
          <blockquote className="mt-4 border-l-4 border-ouro pl-4 text-carvao/80">
            “Não são objeto de proteção como direitos autorais [...] os textos de
            tratados ou convenções, leis, decretos, regulamentos, decisões judiciais
            e demais atos oficiais.”
          </blockquote>
          <p className="mt-4">
            Essa regra trata da proteção autoral dos textos oficiais; ela não torna
            o Artigo 1º um canal oficial nem significa que todo material editorial,
            comentário, imagem ou conteúdo de terceiros esteja livre de direitos.
            Quando republicamos um ato, buscamos identificar sua origem e, quando
            disponível, indicar o endereço da publicação oficial.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Sem consolidação ou garantia de vigência</h2>
          <p>
            Não fazemos compilações nem consolidações legislativas. O conteúdo não
            deve ser entendido como texto atualizado, compilado ou certificado de
            uma norma. Alterações, revogações, retificações e diferenças entre
            versões podem não estar refletidas aqui. Para confirmar o texto
            aplicável e sua vigência, consulte a publicação nos diários oficiais e
            nas fontes oficiais competentes.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Não somos um canal oficial</h2>
          <p>
            O Artigo 1º não é mantido, aprovado ou endossado por qualquer órgão
            público. A disponibilização de uma norma não representa posição,
            interpretação ou certificação oficial. Em caso de divergência,
            prevalecem as fontes oficiais aplicáveis.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Uso responsável</h2>
          <p>
            Você pode consultar o site para fins informativos. Antes de tomar
            decisões com efeitos jurídicos, confirme as informações diretamente
            nas fontes oficiais e, se necessário, procure orientação profissional
            qualificada.
          </p>
        </section>
      </div>
    </main>
  );
}
