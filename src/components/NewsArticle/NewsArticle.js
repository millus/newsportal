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
      {/* <a href={article?.related?.push?.url}> */}
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
          className={`${styles.markup}  ${isActive ? styles.expand : ""}`}
          dangerouslySetInnerHTML={createMarkup(
            article?.content[numMarkup]?.data
          )}
        ></div>
        {article?.content[numMarkup]?.data.length > 500 && (
          <button className={styles.readMore} onClick={toggleActive}>
            {isActive ? "Les mindre" : "Les mer"}
          </button>
        )}
      </div>
      {/* </a> */}
    </article>
  );
}

export default NewsArticle;
