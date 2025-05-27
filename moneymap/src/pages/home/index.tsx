import React from "react";
import { PageContainer } from "@ant-design/pro-components";
import PageHome from "./home-page/home-page";

const HomePage: React.FC = () => {
  return (
    <PageContainer title={false}>
      <PageHome />
    </PageContainer>
  );
};

export default HomePage;
