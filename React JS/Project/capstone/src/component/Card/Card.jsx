import React from "react";
import styles from './Card.module.css';

export default function Card({ item, onClick, selected }) {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selectedCard : ''}`} 
      style={{ backgroundColor: item.bg_color }}
      onClick={onClick}
    >
      <h3 className={styles.cardTitle}>{item.name}</h3>
      <img
        src={item.image_url}
        alt={item.name}
        className={styles.cardImage}
      />
    </div>
  );
}
