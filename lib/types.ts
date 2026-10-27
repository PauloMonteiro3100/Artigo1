export type TipoAto = "Lei" | "Decreto" | "Portaria" | "Resolução" | "Instrução Normativa";
export type AmbitoAto = "federal" | "estadual" | "distrital";

export const ESTADOS = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
] as const;

export type SiglaEstado = (typeof ESTADOS)[number]["sigla"];

export interface Ato {
  id: string;
  slug: string;
  tipo: TipoAto;
  ambito: AmbitoAto;
  estado: SiglaEstado | null;
  numero: string;
  ano: number;
  data: string; // ISO
  orgao: string;
  ementa: string;
  temas: string[];
  situacao: "original" | "alterado" | "revogado";
  fonte_url?: string;
  conteudo_md?: string;
}

export const TIPOS: TipoAto[] = ["Lei", "Decreto", "Portaria", "Resolução", "Instrução Normativa"];
