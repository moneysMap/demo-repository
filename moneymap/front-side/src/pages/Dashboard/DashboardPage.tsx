import React from "react";
import { Card, Col, Row, Progress, Table } from "antd";
import { Bar, Pie } from "@ant-design/charts";
import { barConfig } from "./configs/barConfig";
import { pieConfig } from "./configs/pieConfig";
import { columns } from "./configs/tableConfig";
import { dataSource } from "./configs/tableConfig";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="total guardado">
            <h2> xxxxxxx</h2>
            <p>
              Semanal: <span style={{ color: "green" }}>+12%</span>
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Gastos Totais">
            <h2>8,846</h2>
            <p>
              Diário: <span style={{ color: "green" }}>+11%</span>
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Recebidos">
            <h2>6,560</h2>
            <p>
              Taxa: <span style={{ color: "green" }}>60%</span>
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="progesso do projeto">
            <Progress percent={78} />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="gastos mensais">
            <Bar {...barConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Distribuição de Categorias">
            <Pie {...pieConfig} />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="Tabela de Dados">
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
