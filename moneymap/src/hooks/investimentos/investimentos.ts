import { useState, useEffect } from "react";

export function useInvestimentos() {
  const [investimentos, setInvestimentos] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => setInvestimentos(8000), 500);
  }, []);

  return investimentos;
}