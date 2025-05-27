import {
  HomeOutlined,
  DashboardOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HomePage from './pages/home/index';

const menu = [
  {
    path: "/",
    name: "Home",
    icon: <HomeOutlined />,
    routes: [
      {
        path: "/home",
        name: "Página Inicial",
        component: HomePage,
        icon: <HomeOutlined />,
      },
      {
        path: "/despasas",
        name: "Despesas",
        component: "",
        icon: <MinusCircleOutlined />,
      },
      {
        path: "/ganhos",
        name: "Ganhos",
        component: "",
        icon: <PlusCircleOutlined />,
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardOutlined />,
    routes: [
      {
        path: "/dashboard/overview",
        name: "Visão Geral",
        componet: DashboardPage,
      },
    ],
  },
];
export default menu;
