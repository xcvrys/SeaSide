import { Card } from "./Card";
import RightDashboard from "./RightDashboard";
import styles from "../styles/Dashboard.module.css";
import { useState } from "react";

export function Article({ title, content }: ArticleProps) {
  return (
    <aside
      className={title === "0% prowizji" ? styles.AtricleColor : styles.Atricle}
    >
      <h2>{title}</h2>
      <span>{content}</span>
    </aside>
  );
}

export default function Dashboard() {
  const [account, setAccount] = useState("");
  return (
    <main className={styles.DashboardMain}>
      <section className={styles.DashboardLeft}>
        <aside className={styles.CardHolder}>
          <Card
            selectCard={() => setAccount("4361 6019 6525 1234")}
            cardName="Karta kredytowa"
            cardNumber="4361 6019 6525 1234"
            cardBalance="60301"
            cardCurrency="PLN"
            selected={account === "4361 6019 6525 1234"}
          />
          <Card
            selectCard={() => setAccount("4383 7711 3547 5678")}
            cardName="Konto oszczędnościowe"
            cardNumber="4383 7711 3547 5678"
            cardBalance="342598"
            cardCurrency="EUR"
            selected={account === "4383 7711 3547 5678"}
          />
        </aside>
        <Article
          title="0% prowizji"
          content={
            <span>
              0% prowizji za udzielenie kredytu gotówkowego,{" "}
              <b>kod BIEG (RRSO 13,23%)</b> Online do <b>60 900 PLN</b> zobacz
              koszt kredytu
            </span>
          }
        />
        <Article
          title="Miejsce na Twój produkt"
          content={
            <span>
              Wybierz w
              <span
                style={{
                  color: "var(--accent)",
                }}
              >
                {" "}
                ustawieniach{" "}
              </span>
              produkt, który chcesz tu umieścić.
            </span>
          }
        />
        <div
          style={{
            width: "100%",
          }}
        >
          <div className={styles.AtricleSection}>
            <h2>Poczta</h2>
            <button>WIĘCEJ</button>
          </div>
          <aside className={styles.AtricleReversed}>
            <img src="/lucide_info.svg" alt="lucide_info" />
            <span>
              Przerwa na rozwój naszych technologii w nocy z 25 na 26 maja
            </span>
          </aside>
        </div>
      </section>

      <section className={styles.DashboardRight}>
        <RightDashboard account={account} />
      </section>
    </main>
  );
}
