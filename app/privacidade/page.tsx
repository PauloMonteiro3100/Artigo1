import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Artigo 1º",
  description: "Saiba como o Artigo 1º trata dados e cookies nesta versão do site.",
};

export default function PrivacidadePage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:py-16">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-bordo">Seus dados</p>
        <h1 className="font-serif text-4xl font-semibold text-vinho sm:text-5xl">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-carvao/70">Última atualização: 27 de outubro de 2026</p>
      </header>

      <div className="space-y-8 text-base leading-7">
        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Em resumo</h2>
          <p>
            Nesta versão, o Artigo 1º não oferece cadastro, não solicita dados
            pessoais em formulários e não utiliza ferramentas próprias de
            publicidade, análise de navegação ou criação de perfis.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Dados técnicos de acesso</h2>
          <p>
            Como em outros sites, a infraestrutura de hospedagem e segurança
            utilizada para disponibilizar a página poderá registrar dados técnicos
            de acesso, como endereço IP, data e horário, navegador e informações
            necessárias para diagnosticar falhas ou proteger o serviço. Esses
            registros são tratados conforme a configuração e as políticas dos
            respectivos provedores; não usamos esses dados para identificar ou
            perfilar visitantes.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Cookies e tecnologias semelhantes</h2>
          <p>
            Atualmente, não configuramos cookies próprios para publicidade,
            rastreamento ou análise de comportamento. O navegador ou os provedores
            técnicos podem utilizar armazenamento ou cookies estritamente
            necessários ao funcionamento, à entrega ou à segurança do site,
            dependendo da infraestrutura empregada. Você pode consultar e controlar
            cookies nas configurações do seu navegador; bloqueá-los pode afetar
            funcionalidades de serviços externos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Serviços e links externos</h2>
          <p>
            O site pode apontar para páginas de terceiros, inclusive fontes
            oficiais. Ao acessá-las, o tratamento de dados passa a seguir as
            políticas e os termos desses serviços, que não são controlados por nós.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-2xl font-semibold text-vinho">Mudanças nesta política</h2>
          <p>
            Se passarmos a oferecer cadastro, coletar informações ou adotar cookies
            não essenciais, atualizaremos esta página para explicar o que muda e
            quais opções estarão disponíveis. Esta política descreve a versão atual
            do site e considera os princípios da{" "}
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
              target="_blank"
              rel="noreferrer"
              className="text-vinho underline underline-offset-2"
            >
              Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
