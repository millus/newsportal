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
      <a href={article?.related?.push?.url}>
        {hasPictures && (
          <SvgImage
            alt={article?.content[0]?.files[0]?.caption}
            src={article?.content[0]?.files[0]?.url}
          ></SvgImage>
        )}
         <h2 className={styles.title}>{article?.title}</h2>
        {(hasPictures && hasMarkup) ? (
          <div
            dangerouslySetInnerHTML={createMarkup(article?.content[1]?.data)}
          ></div>
        ) : (
          <div
            dangerouslySetInnerHTML={createMarkup(article?.content[0]?.data)}
          ></div>
        )}
      </a>
    </article>
  );
}

export default NewsArticle;
