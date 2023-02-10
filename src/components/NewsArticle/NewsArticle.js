import React from "react";
import posts from "../../posts.json";
import styles from './NewsArticle.module.css';

function NewsArticle() {
  const postsData = [...posts.docs];
  const [articleList, setArticleList] = React.useState(postsData);

  return (
    <ul className={styles.list}>
      {articleList.map(({id, title}) => (
        <li key={id}><h2 className={styles.title}>{title}</h2></li>
      ))}
    </ul>
  );
}

export default NewsArticle;
