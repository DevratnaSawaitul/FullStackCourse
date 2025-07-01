import React, { use } from "react";
import styles from './Register.module.css'
import Button from "../Button/Button";
import { useContext } from "react";
import { RegisterContext } from "../../context/registerContext.jsx";
export default function Register() {
  const { registerInputs, setRegisterInputs } = useContext(RegisterContext);
  const handleFormData = (event) => {
    const { name, type, value, checked } = event.target;
    console.log(name, type == 'checkbox' ? checked : value);
    setRegisterInputs((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = () => {
    const { fname, user_name, email, phone, terms_condition_checkbox } = registerInputs;
    if (!fname || !user_name || !email || !phone || !terms_condition_checkbox) {
      alert('Pls fill all fields');
    } else {
      alert('Submitted');
    }
  }
  return (
    <div className={styles.register_body}>
      <h1 className={styles.heading}>Super App</h1>
      <h4 className={styles.sub_heading}>Create your new Account</h4>
      <input className={styles.register_input} id='fname' name='fname' type='text' placeholder="Name" onChange={(event) => handleFormData(event)} value={registerInputs.fname || ''} /><br />
      <input className={styles.register_input} id='user_name' name='user_name' type='text' placeholder="UserName" onChange={(event) => handleFormData(event)} value={registerInputs.user_name || ''} /><br />
      <input className={styles.register_input} id='email' name='email' type='email' placeholder="Email" onChange={(event) => handleFormData(event)} value={registerInputs.email || ''} /><br />
      <input className={styles.register_input} id='phone' name='phone' type='tel' placeholder="Phone" onChange={(event) => handleFormData(event)} value={registerInputs.phone || ''} /><br />
      <span className={styles.register_checkbox}><input id='terms_condition_checkbox' name='terms_condition_checkbox' onChange={(event) => handleFormData(event)} type='checkbox' value={registerInputs.terms_condition_checkbox} />&nbsp; Share my registration data with Superapp</span>
      <Button work="Register" onClick={handleSubmit} />
      <span className={styles.footer_text}>By clicking on Sign up. you agree to Superapp <a href="https://www.termsfeed.com/blog/terms-conditions-url/" target="_blank" className={styles.link_font}>Terms and Conditions of Use</a></span>
      <span className={styles.footer_text}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="https://www.termsfeed.com/blog/terms-conditions-url/" target="_blank" className={styles.link_font}>Privacy Policy</a></span>
    </div>
  );
}
