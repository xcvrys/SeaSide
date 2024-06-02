import styles from "../styles/Underheader.module.css";

export default function Underheader() {
  return (
    <div className={styles.Underheader}>
      <ul>
        <li>
          <a href="#"></a>Konta
        </li>
        <li>
          <a href="#">Kredyty</a>
        </li>
        <li>
          <a href="#">Karty</a>
        </li>
        <li>
          <a href="#">Inwestycje i oszczędności</a>
        </li>
        <li>
          <a href="#">Ubezpiecznia</a>
        </li>
        <li>
          <a href="#">Usługi i e-Urząd</a>
        </li>
        <li>
          <a href="#">Aplikacja i serwis</a>
        </li>
        <li>
          <a href="#">dla ciebie</a>
        </li>
        <li>
          <a href="#">bezpieczeństwo</a>
        </li>
      </ul>
    </div>
  );
}
