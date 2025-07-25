import styles from './Button.module.css';

export default function Button(props) {
  const isRegister = props.work === 'Register';

  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${isRegister ? styles.fullWidth : ''}`}
    >
      {props.work || "Click Me"}
    </button>
  );
}
