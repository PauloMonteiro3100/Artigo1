"use client";

import { useEffect, useRef, useState } from "react";
import { ESTADOS, TIPOS } from "../lib/types";

const campo =
  "w-full rounded-md border border-ouro/70 bg-creme px-3 py-2 text-sm focus-visible:border-vinho";

export default function BuscaComFiltro() {
  const [aberto, setAberto] = useState(false);
  const [tipo, setTipo] = useState("");
  const [ano, setAno] = useState("");
  const [numero, setNumero] = useState("");
  const [localidade, setLocalidade] = useState("");
  const caixa = useRef<HTMLDivElement>(null);

  const ativos = [tipo, ano, numero, localidade].filter(Boolean).length;

  useEffect(() => {
    function aoClicarFora(e: MouseEvent) {
      if (caixa.current && !caixa.current.contains(e.target as Node)) setAberto(false);
    }
    function aoApertarEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setAberto(false);
    }
    document.addEventListener("mousedown", aoClicarFora);
    document.addEventListener("keydown", aoApertarEsc);
    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      document.removeEventListener("keydown", aoApertarEsc);
    };
  }, []);

  function limpar() {
    setTipo("");
    setAno("");
    setNumero("");
    setLocalidade("");
  }

  return (
    <form action="/busca" method="get" className="w-full max-w-2xl">
      <div className="flex items-center gap-3">
        <div className="flex flex-1 items-center rounded-full border border-ouro/70 bg-creme px-5 shadow-sm focus-within:border-vinho">
          <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-bordo" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <label htmlFor="q" className="sr-only">Buscar na legislação</label>
          <input
            id="q"
            name="q"
            type="search"
            placeholder="Busque por tema, palavra ou artigo"
            className="w-full bg-transparent px-3 py-3.5 text-base outline-none"
            style={{ outline: "none" }}
          />
        </div>

        <div ref={caixa} className="relative">
          <button
            type="button"
            aria-expanded={aberto}
            aria-controls="painel-filtro"
            onClick={() => setAberto(!aberto)}
            className="flex items-center gap-2 rounded-full border border-vinho px-5 py-3 text-sm font-medium text-vinho hover:bg-areia"
          >
            Filtro
            {ativos > 0 && (
              <span className="rounded-full bg-vinho px-2 text-xs text-creme">{ativos}</span>
            )}
          </button>

          <div
            id="painel-filtro"
            className={`${aberto ? "block" : "hidden"} absolute right-0 z-10 mt-2 w-72 rounded-xl border border-ouro/60 bg-creme p-4 shadow-lg`}
          >
            <div className="space-y-3">
              <div>
                <label htmlFor="localidade" className="mb-1 block text-sm font-medium">Estado / âmbito</label>
                <select
                  id="localidade"
                  name="localidade"
                  value={localidade}
                  onChange={(e) => setLocalidade(e.target.value)}
                  className={campo}
                >
                  <option value="">Todos os âmbitos</option>
                  <option value="federal">Federal</option>
                  {ESTADOS.map((estado) => (
                    <option key={estado.sigla} value={estado.sigla}>{estado.nome}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="tipo" className="mb-1 block text-sm font-medium">Tipo de ato</label>
                <select id="tipo" name="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} className={campo}>
                  <option value="">Todos os tipos</option>
                  {TIPOS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ano" className="mb-1 block text-sm font-medium">Ano</label>
                <input id="ano" name="ano" type="number" min={1800} max={2100} placeholder="Ex.: 1990"
                  value={ano} onChange={(e) => setAno(e.target.value)} className={campo} />
              </div>
              <div>
                <label htmlFor="numero" className="mb-1 block text-sm font-medium">Número</label>
                <input id="numero" name="numero" type="text" inputMode="numeric" placeholder="Ex.: 8.078"
                  value={numero} onChange={(e) => setNumero(e.target.value)} className={campo} />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button type="button" onClick={limpar} className="text-sm text-bordo underline">
                Limpar
              </button>
              <button type="submit" className="rounded-md bg-vinho px-4 py-1.5 text-sm font-medium text-creme hover:bg-bordo">
                Aplicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}