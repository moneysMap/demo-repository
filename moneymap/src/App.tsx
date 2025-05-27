import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HomePage from "./pages/home/index";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/dashboard/overview" element={<DashboardPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          {/* Adicione outras rotas aqui */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
