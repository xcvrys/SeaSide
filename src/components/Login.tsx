import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <section className={styles.LoginBackground}>
      <div className={styles.LoginView}>
        <span className={styles.LoginContainerBorder} />
        <form
          className={styles.LoginContainer}
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >
          <img
            src="https://thispersondoesnotexist.com/"
            alt="Person"
            className={styles.LoginImage}
          />

          <p>Klienci indywidualni i firmowi</p>
          <input
            className={styles.LoginInput}
            type="text"
            placeholder="Login"
            required
          />
          <input
            className={styles.LoginInput}
            type="password"
            placeholder="Password"
            required
          />
          <button className={styles.LoginButton}>Zaloguj sie</button>
        </form>
      </div>
      <button className={styles.LogionOption}>
        <h3>Private Banking</h3>
        <img
          src="https://thispersondoesnotexist.com/"
          alt="Person"
          className={styles.LoginOptionImage}
        />
      </button>
      <button className={styles.LogionOption}>
        <h3>Company Name</h3>
        <img
          src="https://thispersondoesnotexist.com/"
          alt="Person"
          className={styles.LoginOptionImage}
        />
      </button>
    </section>
  );
}
