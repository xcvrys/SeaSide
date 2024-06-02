import Dashboard from "../components/Dashboard.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function DashboardPage() {
  return (
    <>
      <Header mode="dashboard" />
      <Dashboard />
      <Footer />
    </>
  );
}
