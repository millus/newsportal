import React from "react";
import { getNews } from "../../helper/APIHelper";
import posts from "../../posts.json";
import NewsArticle from "../NewsArticle/NewsArticle";
import styles from "./Portal.module.css";

function Portal({portalId}) {
  const postsData = [...posts.docs];
  const [articleList, setArticleList] = React.useState([]);
  
  React.useEffect(() => {
    getNews(portalId).then(json => {
      setArticleList(json.docs)
    })
  }, [portalId])
  
  return (
    <ul className={styles.list}>
      {articleList.map((article) => (
        <li key={article.id}>
          <h2 className={styles.title}>{article.title}</h2>
          <NewsArticle article={article}></NewsArticle>
        </li>
      ))}
    </ul>
   
  );
}

export default Portal;