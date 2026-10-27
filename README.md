# Artigo 1º — scaffold

Estes arquivos são uma camada para colocar por cima de um projeto Next.js novo.

1. Crie o projeto (aceite TypeScript, Tailwind, App Router, alias `@/*`, pasta `src/`):
   `npx create-next-app@latest artigo1`
2. Copie `src/` e `supabase/` deste pacote para dentro de `artigo1/`, sobrescrevendo
   `src/app/globals.css`, `layout.tsx` e `page.tsx`.
3. `npm run dev` e abra http://localhost:3000
4. Crie um projeto no Supabase e rode `supabase/schema.sql` no SQL Editor.
5. Próximos passos: `/busca`, `/ato/[slug]`, login (`@supabase/ssr`).

Cada norma deve ter o âmbito `federal`, `estadual` ou `distrital`. Normas federais usam
`estado = null`; normas estaduais informam uma UF (exceto `DF`), e normas do Distrito
Federal usam `ambito = 'distrital'` com `estado = 'DF'`.

Observações:
- Feito para Tailwind v4 (padrão atual do create-next-app): as cores ficam em `globals.css`.
- A busca usa a configuração `portuguese` do Postgres. Para ignorar acentos, dá para
  adicionar a extensão `unaccent` depois.
