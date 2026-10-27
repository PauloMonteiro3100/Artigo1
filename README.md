# Artigo 1º

Projeto independente para tornar a legislação brasileira mais direta, organizada
e fácil de consultar. O site tem finalidade informativa: não é um canal oficial,
não faz compilações legislativas e não substitui a publicação nos diários oficiais.

**Repositório:** [PauloMonteiro3100/Artigo1](https://github.com/PauloMonteiro3100/Artigo1)

## O que já está no projeto

- Página inicial com campo de busca e filtros de localidade, tipo de ato, ano e número.
- Filtro de localidade com a opção Federal e as 27 unidades federativas.
- Páginas institucionais de [Sobre nós](/sobre), [Política de Privacidade](/privacidade)
  e [Termos de Uso](/termos).
- Esquema inicial do Supabase para atos, favoritos e pastas.

> **Estado do desenvolvimento:** a interface de busca está pronta, mas a rota de
> resultados (`/busca`), a integração com o Supabase, cadastro de normas e login
> ainda não foram implementados.

## Tecnologias

- [Next.js](https://nextjs.org/) 16 com App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Supabase](https://supabase.com/) (esquema SQL inicial em `supabase/schema.sql`)

## Requisitos

- Node.js 20.9 ou superior
- npm

## Executar localmente

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/PauloMonteiro3100/Artigo1.git
cd Artigo1
```

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Inicia a versão de produção já compilada |
| `npm run lint` | Executa o ESLint |

Para testar a versão de produção localmente:

```bash
npm run build
npm run start
```

## Banco de dados

O arquivo [`supabase/schema.sql`](./supabase/schema.sql) contém o esquema inicial
para executar no SQL Editor de um projeto Supabase. Ele cria as tabelas `atos`,
`favoritos`, `pastas` e `pasta_atos`, além de índices e políticas de segurança
(RLS). O projeto ainda não está conectado a uma instância Supabase.

Cada norma deve ser cadastrada de acordo com seu âmbito:

| Âmbito | Valor de `ambito` | Valor de `estado` |
| --- | --- | --- |
| Federal | `federal` | `NULL` |
| Estadual | `estadual` | Sigla da UF, exceto `DF` |
| Distrito Federal | `distrital` | `DF` |

O esquema valida os valores de âmbito e as siglas das unidades federativas.
Normas estaduais precisam de uma UF; normas federais não devem ter estado
associado.

## Segurança e publicação

O Next.js envia cabeçalhos HTTP para reduzir riscos comuns no navegador, como
enquadramento da página por outros sites, detecção indevida de tipos de arquivo
e envio excessivo de informações de referência. Isso é uma proteção básica,
não substitui controles de infraestrutura.

Esta versão ainda não tem API nem integração ativa com o banco, portanto não há
rate limiting da aplicação a configurar agora. Quando endpoints forem criados,
limites de requisição devem ser aplicados no servidor ou na camada de borda
(CDN/WAF), nunca apenas no navegador.

Antes de publicar:

- Ative a proteção contra DDoS e regras de WAF oferecidas pela hospedagem ou CDN.
- Configure limites de requisição na borda para rotas de API quando existirem e
  monitore alertas de tráfego.
- Proteja as contas da hospedagem, do registrador de domínio e do DNS com MFA;
  use bloqueio de transferência do domínio e DNSSEC se o provedor oferecer.
- Mantenha segredos em variáveis de ambiente locais/de produção. Não coloque
  chaves privadas no código nem em variáveis `NEXT_PUBLIC_*`, que são expostas
  ao navegador. Arquivos `.env*` são ignorados pelo Git.
- Se integrar o Supabase, nunca exponha a chave `service_role` no frontend.

## Estrutura principal

```text
src/
  app/
    page.tsx               Página inicial
    sobre/page.tsx         Sobre nós
    privacidade/page.tsx   Política de Privacidade
    termos/page.tsx        Termos de Uso
  components/
    BuscaComFiltro.tsx     Campo de busca e filtros
    Header.tsx             Cabeçalho
    Footer.tsx             Rodapé e links institucionais
  lib/
    links.ts               Links de navegação
    types.ts               Tipos dos atos e lista de UFs
public/
  ...                      Arquivos estáticos
supabase/
  schema.sql               Esquema inicial do banco
```

## Contribuições

Sugestões e melhorias são bem-vindas. Antes de abrir uma contribuição, rode:

```bash
npm run lint
```

## Aviso importante

O conteúdo do Artigo 1º é informativo e não constitui aconselhamento jurídico.
Não somos um órgão público ou canal oficial. Não fazemos compilações nem
garantimos que o conteúdo reflita alterações ou revogações posteriores. Para
confirmar a publicação, a vigência e o texto aplicável de uma norma, consulte os
diários oficiais e as fontes oficiais competentes.
