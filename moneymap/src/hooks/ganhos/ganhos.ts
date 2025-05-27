import { useState, useEffect } from "react";

export function useGanhos() {
  const [ganhos, setGanhos] = useState<number>(0);

  useEffect(() => {
    // Simule uma chamada de API
    setTimeout(() => setGanhos(2500), 500);
  }, []);

  return ganhos;
}