import React from "react";
import styles from './SideImage.module.css';
import side_img from '../../images/side_banner.png'; 

export default function SideImage() {
  return (
    <div className={styles.side_image}>
      <img src={side_img} alt="side" />
      <p className={styles.side_image_text}>
        Discover New Things With SuperApp
      </p>
    </div>
  );
}
