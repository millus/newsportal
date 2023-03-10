import React from "react";
import SvgImage from "../SvgImage/SvgImage";
import styles from "./NewsArticle.module.css";

function NewsArticle({ article }) {
  const [isActive, setIsActive] = React.useState(false);
  const hasPictures = !!(article?.content[0]?.type === "PICTURES");
  const hasMarkup = !!(
    article?.content[0]?.type === "MARKUP" ||
    article?.content[1]?.type === "MARKUP"
  );
  const numMarkup = hasPictures && hasMarkup ? 1 : 0;
  const hasLongText = !!(article?.content[numMarkup]?.data.length > 380);

  function createMarkup(str) {
    return {
      __html: str,
    };
  }
  function toggleActive(event) {
    setIsActive((isActive) => !isActive);
  }
  return (
    <article className={styles.article}>
      <div className={styles.imgWrapper}>
        {hasPictures && (
          <SvgImage
            alt={article?.content[0]?.files[0]?.caption}
            src={article?.content[0]?.files[0]?.url}
          ></SvgImage>
        )}
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{article?.title}</h2>
        <div
          className={`${styles.markup} ${hasLongText ? styles.longText : ""} ${
            isActive ? styles.expand : ""
          }`}
          dangerouslySetInnerHTML={createMarkup(
            article?.content[numMarkup]?.data
          )}
        ></div>
        {hasLongText && (
          <button className={styles.readMore} onClick={toggleActive}>
            {isActive ? "Les mindre" : "Les mer"}
          </button>
        )}
      </div>
    </article>
  );
}

export default NewsArticle;
