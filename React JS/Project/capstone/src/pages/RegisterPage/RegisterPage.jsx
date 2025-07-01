import React from "react";
import Register from "../../component/Register/Register";
import styles from './RegisterPage.module.css';
import SideImage from "../../component/SideImage/SideImage.jsx";

export default function RegisterPage() {
  return (
    <div className={styles.register_page_main_body}>
      <div className={styles.register_page_content}>
        <SideImage />
      </div>
      <div className={styles.register_page_content}>
        <Register />
      </div>
    </div>
  );
}
