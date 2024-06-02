import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Login from "../components/Login.tsx";

export default function LoginPage() {
  return (
    <>
      <Header mode="login" />
      <Login />
      <Footer extended />
    </>
  );
}
