import { useState, useEffect } from "react";

type Estatistica = { data: string; valor: number };

export function useEstatisticasPorPeriodo(periodo: string) {
  const [dados, setDados] = useState<Estatistica[]>([]);

  useEffect(() => {
    // Simule dados diferentes para cada período
    if (periodo === "1m") {
      setDados([
        { data: "01/05", valor: 200 },
        { data: "08/05", valor: 400 },
        { data: "15/05", valor: 300 },
        { data: "22/05", valor: 500 },
        { data: "29/05", valor: 250 },
      ]);
    } else if (periodo === "3m") {
      setDados([
        { data: "Mar", valor: 1000 },
        { data: "Abr", valor: 1200 },
        { data: "Mai", valor: 1500 },
      ]);
    } else if (periodo === "1y") {
      setDados([
        { data: "Jan", valor: 800 },
        { data: "Fev", valor: 900 },
        { data: "Mar", valor: 1000 },
        { data: "Abr", valor: 1200 },
        { data: "Mai", valor: 1500 },
        { data: "Jun", valor: 1300 },
        { data: "Jul", valor: 1400 },
        { data: "Ago", valor: 1600 },
        { data: "Set", valor: 1700 },
        { data: "Out", valor: 1800 },
        { data: "Nov", valor: 1900 },
        { data: "Dez", valor: 2000 },
      ]);
    }
  }, [periodo]);

  return dados;
}