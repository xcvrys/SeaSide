import styles from "../styles/Dashboard.module.css";

export function Card({
  selectCard,
  cardName,
  cardNumber,
  cardBalance,
  cardCurrency,
  selected,
}: CardProps) {
  return (
    <div
      className={selected ? styles.CardSelected : styles.Card}
      onClick={selectCard}
    >
      <div className={styles.CardHeader}>
        <div>
          <h3>{cardName}</h3>
          <button className={styles.CardHeaderCopy}>
            <img src="/bx_copy.svg" alt="copy" height="16px" width="16px" />
            {cardNumber}
          </button>
        </div>
        <img src="/solar_settings-broken.svg" alt="" />
      </div>
      <div className={styles.CardDetails}>
        <div>
          <p>Dostępne środki</p>
          <h2>
            {cardBalance.slice(0, cardBalance.length - 2)}
            <span>
              ,{cardBalance.slice(cardBalance.length - 2, cardBalance.length)}{" "}
              {cardCurrency}
            </span>
          </h2>
        </div>
        <button>PRZELEJ</button>
      </div>
    </div>
  );
}
