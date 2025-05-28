import React from "react";
import { Card, Statistic } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";
import { useInvestimentos } from "../../hooks/investimentos/investimentos";

const GanhosCard: React.FC = () => {
  const ganhos = useInvestimentos();
  return (
    <Card>
      <Statistic
        title="investimentos"
        value={ganhos}
        prefix={<DollarCircleOutlined />}
        valueStyle={{ color: "#254000" }}
      />
    </Card>
  );
};

export default GanhosCard;