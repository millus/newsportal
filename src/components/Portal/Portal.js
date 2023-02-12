import React from "react";
import { getNews } from "../../helper/APIHelper";
import NewsArticle from "../NewsArticle/NewsArticle";
import styles from "./Portal.module.css";

function Portal({ portalId }) {
  const [articleList, setArticleList] = React.useState([]);

  React.useEffect(() => {
    getNews(portalId).then((json) => {
      setArticleList(json.docs);
    });
  }, [portalId]);

  return (
    <section className={styles.grid}>
      {articleList.map((article) => (
        <NewsArticle key={article.id} article={article}></NewsArticle>
      ))}
    </section>
  );
}

export default Portal;
