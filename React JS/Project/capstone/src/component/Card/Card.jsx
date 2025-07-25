import React from "react";
import styles from './Card.module.css';

export default function Card({ item }) {
  return (
    <div className={styles.card} style={{ backgroundColor: item.bg_color }}>
      <h3 className={styles.cardTitle}>{item.name}</h3>
      <img
        src={item.image_url}
        alt={item.name}
        className={styles.cardImage}
      />
    </div>
  );
}
