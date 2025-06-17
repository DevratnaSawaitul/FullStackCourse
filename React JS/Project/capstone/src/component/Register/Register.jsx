import React from "react";
import styles from './Register.module.css'
import Button from "../Button/Button";
export default function Register() {
  return (
    <div className={styles.register_body}>
      <h1 className={styles.heading}>Super App</h1>
      <h4 className={styles.sub_heading}>Create your new Account</h4>
      <input className={styles.register_input} id='fname' name='fname' type='text' placeholder="Name" /><br />
      <input className={styles.register_input} id='user_name' name='user_name' type='text' placeholder="UserName" /><br />
      <input className={styles.register_input} id='email' name='email' type='tel' placeholder="Email" /><br />
      <input className={styles.register_input} id='phone' name='phone' type='phone' placeholder="Phone" /><br />
      <span className={styles.register_checkbox}><input id='terms_condition_checkbox' name='terms_condition_checkbox' type='checkbox' />&nbsp; Share my registration data with Superapp</span>
      <Button  work='Register'/>
      <span className={styles.footer_text}>By clicking on Sign up. you agree to Superapp <a href="https://www.termsfeed.com/blog/terms-conditions-url/" target="_blank" className={styles.link_font}>Terms and Conditions of Use</a></span>
      <span className={styles.footer_text}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="https://www.termsfeed.com/blog/terms-conditions-url/" target="_blank" className={styles.link_font}>Privacy Policy</a></span>
    </div>
  );
}
