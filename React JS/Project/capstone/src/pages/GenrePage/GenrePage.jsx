import React from "react";
import styles from './GenrePage.module.css';
import Card from "../../component/Card/Card";
import Button from "../../component/Button/Button";
import genre_json from '../../json/genre.json';

export default function GenrePage() {
  return (
    <div className={styles.genre_body}>
      <div className={styles.genre_left}>
        <h1 className={styles.heading}>Super App</h1>
        <p className={styles.sub_heading}>Choose Your Entertainment Category</p>
        <p className={styles.genre_error}>&#x26A0; Minimum 3 Category Required</p>
      </div>

      <div className={styles.genre_right}>
        <div className={styles.genre_grid}>
          {genre_json.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        <div className={styles.genre_button_container}>
          <Button className={styles.next_page_button} work="Next Page" />
        </div>
      </div>
    </div>
  );
}
