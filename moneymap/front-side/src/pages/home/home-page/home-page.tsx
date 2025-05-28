import React, { useState } from "react";
import { Card, Avatar, Row, Col, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import GanhosCard from "../../../components/ganhos/ganhos";
import DespesasCard from "../../../components/despesas/despesas";
import InvestimentosCard from "../../../components/investimentos/investimentos";
import Periodos from "../../../components/date/periodos";
import { useEstatisticasPorPeriodo } from "../../../hooks/periodos/useStaticsPeriodo";
import EstatisticasGrafico from "../../../components/date/grafico/grafico";



const { Title, Text } = Typography;

const HomePage: React.FC = () => {
  const [periodo, setPeriodo] = useState("1m");
  const dados = useEstatisticasPorPeriodo(periodo);

  return (
    <div style={{ padding: 24 }}>
      {/* Saudação e avatar */}
      <Card
        style={{
          maxWidth: 400,
          margin: "0 auto",
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ marginBottom: 12 }}
        />
        <Title level={4}>Seja bem-vindo!</Title>
        <Text type="secondary">dados</Text>
      </Card>

      {/* Cards de Ganhos, Despesas e Investimentos */}
      <Row gutter={16} justify="center" style={{ marginBottom: 24 }}>
        <Col>
          <GanhosCard />
        </Col>
        <Col>
          <DespesasCard />
        </Col>
        <Col>
          <InvestimentosCard />
        </Col>
      </Row>

      {/* Seletor de período e gráfico */}
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <Periodos periodo={periodo} setPeriodo={setPeriodo} />
        <EstatisticasGrafico dados={dados} />
      </div>
    </div>
  );
};

export default HomePage;
