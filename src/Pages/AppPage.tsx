import { ArticleBottom, ArticleTop } from "../components/Article.tsx";

import AdditionslInfo from "../components/AdditionslInfo.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Underheader from "../components/Underheader.tsx";

function AppPage() {
  return (
    <>
      <Header mode="main" />
      <Underheader />
      <div
        style={{
          padding: "50px 0",
        }}
      >
        <ArticleTop />
        <ArticleBottom />
      </div>
      <AdditionslInfo />
      <Footer />
    </>
  );
}

export default AppPage;
