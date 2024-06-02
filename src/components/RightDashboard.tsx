import Chart from "./Chart";
import ChartData from "../data/chart.json";
import Table from "./Table";
import styles from "../styles/RightDashboard.module.css";
import { useState } from "react";

export function NoAccount() {
  return (
    <>
      <h3>Wybierz konto</h3>
      <p>Wybierz konto z lewej strony aby zobaczyć szczegóły</p>
    </>
  );
}

export default function RightDashboard({ account }: RightDashboardProps) {
  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");
  const data = ChartData;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!showInput) {
      setSearch("");
    }

    setSearch(e.target.value);
  };

  return (
    <section>
      {!account ? (
        <NoAccount />
      ) : (
        <>
          <Chart
            Chartdata={data[account as keyof typeof data].map((item) => ({
              month: item.month,
              ammount: item.ammount,
            }))}
          />
          <div className={styles.SearchContainer}>
            <div className={styles.SearchNav}>
              <h3>Historia operacji</h3>
              <button onClick={() => setShowInput(!showInput)}>SZUKAJ</button>
            </div>
            {showInput && (
              <input
                value={search}
                onChange={handleSearch}
                type="text"
                placeholder="SZUKAJ"
              />
            )}
          </div>
          <Table account={account} search={search} />
        </>
      )}
    </section>
  );
}
