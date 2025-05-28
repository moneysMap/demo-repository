import React from "react";
import { Card, Statistic } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";
import { useDespesas } from "../../hooks/despesas/depesas";

const GanhosCard: React.FC = () => {
  const ganhos = useDespesas();
  return (
    <Card>
      <Statistic
        title="despesas"
        value={ganhos}
        prefix={<DollarCircleOutlined />}
        valueStyle={{ color: "#cf1322" }}
      />
    </Card>
  );
};

export default GanhosCard;