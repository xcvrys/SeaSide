import styles from "../styles/AdditionslInfo.module.css";

export default function AdditionslInfo() {
  return (
    <section className={styles.parentWrapper}>
      <article className={styles.parent}>
        <div className={styles.grid1}>
          <div className={styles.gridElementHeader}>
            <h3>Karty</h3>
            <img src="/card-3.svg" alt="" />
          </div>
          <span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              facilisis, tortor nec ultricies molestie, mi arcu tempor urna,
              vitae egestas nunc turpis at nunc.
            </p>
          </span>
        </div>
        <div className={styles.grid2}>
          <div className={styles.gridElementHeader}>
            <h3>Wymiana walut</h3>
            <img src="/euro.svg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, tortor nec ultricies molestie, mi arcu tempor urna, vitae
            egestas nunc turpis at nunc.
          </p>
        </div>
        <div className={styles.grid3}>
          <div className={styles.gridElementHeader}>
            <h3>Jakość</h3>
            <img src="/heart-beat.svg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, tortor nec ultricies molestie, mi arcu tempor urna, vitae
            egestas nunc turpis at nunc.
          </p>
        </div>
        <div className={styles.grid4}>
          <div className={styles.gridElementHeader}>
            <h3>Świnka</h3>
            <img src="/piggy-bank.svg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, tortor nec ultricies molestie, mi arcu tempor urna, vitae
            egestas nunc turpis at nunc.
          </p>
          <p className={styles.marginTop}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, tortor nec ultricies molestie, mi arcu tempor urna, vitae
            egestas nunc turpis at nunc.
          </p>
        </div>
        <div className={styles.grid5}>
          <div className={styles.gridElementHeader}>
            <h3>Oszczędności</h3>
            <img src="/saving.svg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, tortor nec ultricies molestie, mi arcu tempor urna, vitae
            egestas nunc turpis at nunc.
          </p>
        </div>
        <div className={styles.grid6}>
          <div className={styles.gridElementHeader}>
            <h3>Ochrona</h3>
            <img src="/shield-2.svg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, tortor nec ultricies molestie, mi arcu tempor urna, vitae
            egestas nunc turpis at nunc.
          </p>
        </div>
        <div className={styles.grid7}>
          <div className={styles.gridElementHeader}>
            <h3>Lokalizacje</h3>
            <img src="/warehouse.svg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, tortor nec ultricies molestie, mi arcu tempor urna, vitae
            egestas nunc turpis at nunc.
          </p>
        </div>
      </article>
    </section>
  );
}
