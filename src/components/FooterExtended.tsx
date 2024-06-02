import styles from "../styles/FooterExtended.module.css";

export default function FooterExtended() {
  return (
    <div className={styles.FooterMain}>
      <div className={styles.FooterMainLeft}>
        <div className="LU">
          <h3 className={styles.FooterMainBig}>SeaSide ostrzega!</h3>
          <p className={styles.FooterMainSmall}>
            Uważaj na oszustów w rozmowach telefonicznych!
          </p>
        </div>
        <div className="LD">
          <h3 className={styles.FooterMainBig}>Bezpieczeństwo</h3>
          <ol className={styles.FooterMainSmall}>
            <li>
              mBank ostrzega! - <b>więcej</b>
            </li>
            <li>
              Złote zasady bezpieczeńsťwa - <b>więcej</b>
            </li>
            <li>
              Bezpieczny bank w komputerze - <b>więcej</b>
            </li>
            <li>
              Bezpieczny bank w telefonie i na tablecie - <b>więcej</b>
            </li>
            <li>
              Bezpieczeństwo kart płatniczych - <b>więcej</b>
            </li>
            <li>
              Jak SeaSide dba o Twoje bezpieczeńsMo - <b>więcej</b>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.FooterMainRight}>
        <h3 className={styles.FooterMainBig}>Bezpieczeństwo</h3>
        <h4 className={styles.FooterMainSmall}>
          Sprawdź jak odblokować dostęp do serwisu transakcyjnego
        </h4>
      </div>
    </div>
  );
}
