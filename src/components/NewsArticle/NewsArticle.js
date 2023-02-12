import React from "react";
import SvgImage from "../SvgImage/SvgImage";
import styles from "./NewsArticle.module.css";

function NewsArticle({ article }) {
  function createMarkup(str) {
    return {
      __html: str,
    };
  }

  const hasPictures = !!(article?.content[0]?.type === "PICTURES");
  const hasMarkup = !!(
    article?.content[0]?.type === "MARKUP" ||
    article?.content[1]?.type === "MARKUP"
  );

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
          className={styles.markup}
          dangerouslySetInnerHTML={createMarkup(
            article?.content[hasPictures && hasMarkup ? 1 : 0]?.data
          )}
        ></div>
      </div>
      {/* </a> */}
    </article>
  );
}

export default NewsArticle;
