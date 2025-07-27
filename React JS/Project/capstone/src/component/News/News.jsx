import React, { useEffect, useState, useCallback } from "react";
import styles from './News.module.css';
import { getNews } from "../../apis/news";

export default function News() {
    const [newsData, setNewsData] = useState({});

    const fetchNews = useCallback(async () => {
        const article = await getNews();
        if (article) setNewsData(article);
    }, []);

    useEffect(() => {
        fetchNews();
        const intervalId = setInterval(fetchNews, 10000);
        return () => clearInterval(intervalId);
    }, [fetchNews]);

    return (
        <div className={styles.news_body}>
            <div className={styles.news_top}>
                <img className={styles.news_image} src={newsData.urlToImage} alt="News" />
                <div className={styles.news_overlay}>
                    <p className={styles.news_title}>{newsData.title || "Loading..."}</p>
                </div>
            </div>

            <div className={styles.news_bottom}>
                <p className={styles.news_desc}>{newsData.description || "Loading..."}</p>
            </div>
        </div>

    );
}
