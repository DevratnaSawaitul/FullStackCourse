import React from "react";
import Register from "../../component/Register/Register";
import styles from './RegisterPage.module.css';
import SideImage from "../../component/SideImage/SideImage.jsx";
import { useContext } from "react"; 
import { RegisterContext } from "../../context/registerContext.jsx";

export default function RegisterPage() {
  const { registerInputs, setRegisterInputs } = useContext(RegisterContext);
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
