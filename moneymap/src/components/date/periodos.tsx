import React from "react";
import { Select } from "antd";


const options = [
    { label: "1", value: "Janeiro" },
    {label: '3 meses', value: '3m'},
    { label: "1 ano", value: "1y" }
];

type PeriodosProps = {
  periodo: string;
  setPeriodo: React.Dispatch<React.SetStateAction<string>>;
  // other props if any
};


const Periodos: React.FC<PeriodosProps> = ({ periodo, setPeriodo }) => {
    return (
        <Select
            value={periodo}
            style={{ width: 120 }}
            options={options}
            onChange={setPeriodo}
        />
    );
};
export default Periodos;