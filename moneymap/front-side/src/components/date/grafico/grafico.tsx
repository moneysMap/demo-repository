import React from "react";
import { Area } from "@ant-design/charts";

type Props = {
  dados: { data: string; valor: number }[];
};

const EstatisticasGrafico: React.FC<Props> = ({ dados }) => {
  const config = {
    data: dados,
    xField: "data",
    yField: "valor",
    smooth: true,
    areaStyle: { fill: "l(270) 0:#d3adf7 1:#9254de" },
    height: 200,
  };
  return <Area {...config} />;
};

export default EstatisticasGrafico;