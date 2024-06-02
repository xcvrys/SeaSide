import React from "react";
import styles from "../styles/Article.module.css";

const Article = ({ children }: AarticleProps) => (
  <article className={styles.ArticleMain}>
    <div className={styles.Article}>{children}</div>
  </article>
);

const ArticleSection = ({
  header,
  subheader,
  descItems,
  mainButtonText,
  secondaryButtonText,
  imgSrc,
  imgAlt,
  reverse = false,
}: ArticleSectionProps) => (
  <Article>
    {reverse ? (
      <>
        <img src={imgSrc} alt={imgAlt} className={styles.ArticleImage} />
        <ArticleContent
          header={header}
          subheader={subheader}
          descItems={descItems}
          mainButtonText={mainButtonText}
          secondaryButtonText={secondaryButtonText}
        />
      </>
    ) : (
      <>
        <ArticleContent
          header={header}
          subheader={subheader}
          descItems={descItems}
          mainButtonText={mainButtonText}
          secondaryButtonText={secondaryButtonText}
        />
        <img src={imgSrc} alt={imgAlt} className={styles.ArticleImage} />
      </>
    )}
  </Article>
);

const ArticleContent: React.FC<
  Omit<ArticleSectionProps, "imgSrc" | "imgAlt" | "reverse">
> = ({ header, subheader, descItems, mainButtonText, secondaryButtonText }) => (
  <div className={styles.ArticleSide}>
    <div className={styles.ArticleSideHeader}>
      <h2>{header}</h2>
      <span>{subheader}</span>
    </div>
    <div className={styles.ArticleSideDesc}>
      <span>
        <ul>
          {descItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </span>
    </div>
    <div className={styles.ArticleDetails}>
      <button className={styles.ArticleButton}>{mainButtonText}</button>
      <button className={styles.ArticleSmallButton}>
        {secondaryButtonText}
      </button>
    </div>
  </div>
);

export const ArticleTop: React.FC = () => (
  <ArticleSection
    header="Otwórz konto, zgarnij do 520 zł"
    subheader="i oszczędzaj nawet na 6,5%!"
    descItems={[
      "pakiet bezpieczeństwa w którym podpowiadamy, jak chronić siebie i swoje finanse w sieci",
      "nawet 200 zł premii za polecenie konta znajomym",
    ]}
    mainButtonText="Otwórz konto"
    secondaryButtonText="nota prawna"
    imgSrc="/520.svg"
    imgAlt="ArticleImage"
  />
);

export const ArticleBottom: React.FC = () => (
  <ArticleSection
    header="Konto od 13 do 17 lat?"
    subheader="Załóż eKonto możliwości, a możesz zgarnąć nawet 140 zł premii"
    descItems={[
      "karta z wyjątkowym wzorem",
      "0 zł za prowadzenie konta, bankomaty i kartę, szybkie zrzutki ze znajomymi na numer telefonu",
    ]}
    mainButtonText="Załóż konto"
    secondaryButtonText="nota prawna"
    imgSrc="/13to17.svg"
    imgAlt="ArticleImage"
    reverse
  />
);
