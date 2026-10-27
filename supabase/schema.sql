-- Atos (leitura pública)
create table atos (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  tipo text not null,
  ambito text not null check (ambito in ('federal','estadual','distrital')),
  estado text,
  numero text not null,
  ano int not null,
  data date,
  orgao text,
  ementa text not null,
  temas text[] default '{}',
  situacao text not null default 'original' check (situacao in ('original','alterado','revogado')),
  fonte_url text,
  conteudo_md text,
  search_vector tsvector generated always as (
    setweight(to_tsvector('portuguese', coalesce(tipo,'') || ' ' || coalesce(numero,'') || ' ' || ano::text), 'A') ||
    setweight(to_tsvector('portuguese', coalesce(ementa,'')), 'B') ||
    setweight(to_tsvector('portuguese', coalesce(conteudo_md,'')), 'C')
  ) stored,
  constraint atos_estado_sigla_check check (
    estado is null or estado in (
      'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
      'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
    )
  ),
  constraint atos_ambito_estado_check check (
    (ambito = 'federal' and estado is null) or
    (ambito = 'estadual' and estado is not null and estado <> 'DF') or
    (ambito = 'distrital' and estado = 'DF')
  )
);
create index atos_busca_idx on atos using gin (search_vector);
create index atos_filtros_idx on atos (tipo, ano, situacao);
create index atos_localidade_idx on atos (ambito, estado);

-- Dados por usuário
create table favoritos (
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  ato_id uuid not null references atos on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, ato_id)
);
create table pastas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  nome text not null,
  created_at timestamptz default now()
);
create table pasta_atos (
  pasta_id uuid not null references pastas on delete cascade,
  ato_id uuid not null references atos on delete cascade,
  primary key (pasta_id, ato_id)
);

-- Segurança (RLS)
alter table atos enable row level security;
alter table favoritos enable row level security;
alter table pastas enable row level security;
alter table pasta_atos enable row level security;

create policy "atos: leitura pública" on atos for select using (true);
create policy "favoritos: só do dono" on favoritos for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "pastas: só do dono" on pastas for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "pasta_atos: só do dono da pasta" on pasta_atos for all
  using (exists (select 1 from pastas p where p.id = pasta_id and p.user_id = auth.uid()))
  with check (exists (select 1 from pastas p where p.id = pasta_id and p.user_id = auth.uid()));
