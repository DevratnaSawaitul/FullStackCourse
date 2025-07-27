import React, { use, useState } from "react";
import styles from './Register.module.css'
import Button from "../Button/Button";
import { useContext } from "react";
import { RegisterContext } from "../../context/registerContext.jsx";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const { registerInputs, setRegisterInputs } = useContext(RegisterContext);
  const navigate = useNavigate();
  const handleFormData = (event) => {
    const { name, type, value, checked } = event.target;
    // console.log(name, type == 'checkbox' ? checked : value);
    setRegisterInputs((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setFilledCheck((prev) => ({
      ...prev,
      [name]: true
    }));
  };
  const [getFilledCheck, setFilledCheck] = useState({
    fname: true,
    user_name: true,
    email: true,
    phone: true,
    terms_condition_checkbox: true
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fname, user_name, email, phone, terms_condition_checkbox } = registerInputs;
    if (!fname || !user_name || !email || !phone || !terms_condition_checkbox) {
      const newFilledCheck = {
        fname: !!fname?.trim(),
        user_name: !!user_name?.trim(),
        email: !!email?.trim(),
        phone: !!phone?.trim(),
        terms_condition_checkbox: !!terms_condition_checkbox
      }
      setFilledCheck(newFilledCheck);
    } else {
      localStorage.setItem('registerData', JSON.stringify(registerInputs));
      navigate("/genre", {replace:true}); // goes to genre page and prevent going back
    }
  }
  return (
    <div className={styles.register_body}>
      <h1 className={styles.heading}>Super App</h1>
      <h4 className={styles.sub_heading}>Create your new Account</h4>
      <input className={styles.register_input} id='fname' name='fname' type='text' placeholder="Name" style={{
        border: !getFilledCheck.fname ? '2px solid red' : '1px solid gray'
      }} onChange={(event) => handleFormData(event)} value={registerInputs.fname || ''} /><br />
      {!getFilledCheck.fname && <><p className={styles.error_text}>Field is Required</p><br /></>}
      <input className={styles.register_input} id='user_name' name='user_name' type='text' style={{
        border: !getFilledCheck.user_name ? '2px solid red' : '1px solid gray'
      }} placeholder="UserName" onChange={(event) => handleFormData(event)} value={registerInputs.user_name || ''} /><br />
      {!getFilledCheck.user_name && <><p className={styles.error_text}>Field is Required</p><br /></>}
      <input className={styles.register_input} id='email' name='email' type='email' style={{
        border: !getFilledCheck.email ? '2px solid red' : '1px solid gray'
      }} placeholder="Email" onChange={(event) => handleFormData(event)} value={registerInputs.email || ''} /><br />
      {!getFilledCheck.email && <><p className={styles.error_text}>Field is Required</p><br /></>}
      <input className={styles.register_input} id='phone' name='phone' type='tel' style={{
        border: !getFilledCheck.phone ? '2px solid red' : '1px solid gray'
      }} placeholder="Phone" onChange={(event) => handleFormData(event)} value={registerInputs.phone || ''} /><br />
      {!getFilledCheck.phone && <><p className={styles.error_text}>Field is Required</p><br /></>}
      <span className={styles.register_checkbox}><input id='terms_condition_checkbox' name='terms_condition_checkbox' onChange={(event) => handleFormData(event)} type='checkbox' value={registerInputs.terms_condition_checkbox || false} />&nbsp; Share my registration data with Superapp</span>
      {!getFilledCheck.terms_condition_checkbox && <><p className={styles.error_text}>Check the box if you want to proceed</p><br /></>}
      <Button work="Register" onClick={handleSubmit} />
      <span className={styles.footer_text}>By clicking on Sign up. you agree to Superapp <a href="https://www.termsfeed.com/blog/terms-conditions-url/" target="_blank" className={styles.link_font}>Terms and Conditions of Use</a></span>
      <span className={styles.footer_text}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="https://www.termsfeed.com/blog/terms-conditions-url/" target="_blank" className={styles.link_font}>Privacy Policy</a></span>
    </div>
  );
}