import styles from "../styles/Header.module.css";

const MainNav = () => (
  <nav className={styles.contextNav}>
    <ul>
      <li>
        <a href="#"> Klienci indywidualni</a>
      </li>
      <li>
        <a href="#"> Private banking</a>
      </li>
      <li>
        <a href="#"> Firmy</a>
      </li>
      <li>
        <a href="#"> MSP i korporacje</a>
      </li>
    </ul>
  </nav>
);

const LoginHeader = () => (
  <h2 className={styles.loginHeader}>SeaSide Bank Login</h2>
);

const DashboardHeader = () => (
  <div className={styles.dashboardHeader}>
    <ul>
      <li>Pulpit</li>
      <li>Płatności</li>
      <li>Produkty</li>
      <li>Finanse</li>
      <li>Pomoc</li>
    </ul>
  </div>
);

const DashboardButtons = () => (
  <>
    <button className={styles.dasboarButton}>+ nowy rachunek firmowy</button>
    <a href="#" className={styles.dasboarButtonSettings}>
      <img src="/solar_settings-broken.svg" alt="settings" />
    </a>
    <a href="#">
      <img src="/quill_mail.svg" alt="mail" />
    </a>
    <a href={`/`}>
      <img src="/material-symbols_logout-rounded.svg" alt="logout" />
    </a>
  </>
);

const DefaultButtons = () => (
  <>
    <a href="#" className={styles.defaultIcons}>
      <img src="/mingcute_phone-line.svg" alt="phone" />
    </a>
    <a href="#" className={styles.defaultIcons}>
      <img src="/ic_round-search.svg" alt="search" />
    </a>
  </>
);

const LoginButtonWrapper = () => (
  <a href={`/login`} className={styles.LoginButtonWrapper}>
    <button className={styles.LoginButton}>zaloguj</button>
    <img
      src="/LoginButton.svg"
      alt="LoginButtonBackground"
      className={styles.LoginButtonBackground}
    />
  </a>
);

export default function Header({ mode }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a href={`/`}>
        <img src="/SS_LOGO.svg" alt="logo" />
      </a>

      {mode === "main" && <MainNav />}
      {mode === "login" && <LoginHeader />}
      {mode === "dashboard" && <DashboardHeader />}

      <nav className={styles.imagesNav}>
        {mode === "dashboard" && <DashboardButtons />}
        <a href="#">
          <img src="/circle-flags_us-um.svg" alt="us-flag" />
        </a>
        {mode !== "dashboard" && <DefaultButtons />}
        {mode === "main" && <LoginButtonWrapper />}
      </nav>
    </header>
  );
}
