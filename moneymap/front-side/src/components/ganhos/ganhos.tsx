import React from "react";
import { Card, Statistic } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";
import { useGanhos } from '../../hooks/ganhos/ganhos';

const GanhosCard: React.FC = () => {
  const ganhos = useGanhos();
  return (
    <Card>
      <Statistic
        title="Ganhos"
        value={ganhos}
        prefix={<DollarCircleOutlined />}
        valueStyle={{ color: "#3f8600" }}
      />
    </Card>
  );
};

export default GanhosCard;