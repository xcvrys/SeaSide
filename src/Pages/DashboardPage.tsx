import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import { lazy } from "react";

const Dashboard = lazy(() => import("../components/Dashboard.tsx"));

export default function DashboardPage() {
  return (
    <>
      <Header mode="dashboard" />
      <Dashboard />
      <Footer />
    </>
  );
}
