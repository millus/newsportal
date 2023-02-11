import React from "react";
import posts from "../../posts.json";
import styles from "./NewsArticle.module.css";

function NewsArticle({ article }) {

  return (
    <article>
      <img alt="" src=""></img>
      <h2>{article?.title}</h2>
      <h2>{article?.content[0]?.files[0]?.path}</h2>
    </article>
  );
}

export default NewsArticle;
