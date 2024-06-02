import FooterExtended from "./FooterExtended";
import styles from "../styles/Footer.module.css";

const Footer = ({ extended }: FooterProps) => {
  const footerList = [
    {
      title: "Kontakt z SeaSide",
      links: [
        "Centrum kontaktu",
        "Placówki, bankomaty i wpłatomaty",
        "Obsługa osób z niepełnosprawnościami",
        "Problem ze spłatą",
        "Reklamacje",
        "Biuro prasowe",
        "Zajęcie egzekucyjne",
      ],
    },
    {
      title: "o nas",
      links: [
        "O nas",
        "Kariera",
        "Praca",
        "Kontakt",
        "Blog",
        "Partnerzy",
        "Prasa",
      ],
    },
    {
      title: "Bezpieczeństwo i prawo",
      links: [
        "Bezpieczeństwo",
        "Polityka prywatności",
        "Regulaminy",
        "Ochrona danych",
        "Cookies",
        "Pomoc",
      ],
    },
    {
      title: "Pomoc",
      links: [
        "FAQ",
        "Bezpieczeństwo",
        "Polityka prywatności",
        "Regulaminy",
        "Ochrona danych",
        "Cookies",
        "Pomoc",
      ],
    },
  ];

  return (
    <footer className={styles.Footer}>
      {extended && <FooterExtended />}
      <div className={styles.FooterContainer}>
        {footerList.map((footerItem, index) => (
          <div key={index} className={styles.FooterElement}>
            <h3>{footerItem.title}</h3>
            <ul>
              {footerItem.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {new Date().getFullYear()} SeaSide. Wszelkie prawa zastrzeżone.
    </footer>
  );
};

export default Footer;
