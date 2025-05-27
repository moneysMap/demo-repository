import { useState, useEffect } from "react";

export function useDespesas() {
  const [despesas, setDespesas] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => setDespesas(1200), 500);
  }, []);

  return despesas;
}