import styles from './Button.module.css';

export default function Button({ work, onClick, removable, profile }) {
  const isRegister = ['Register', 'Start', 'Stop'].includes(work);
  const isProfile = profile === true;
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isRegister ? styles.fullWidth : ''} ${isProfile ? styles.profileButton : ''}`}
    >
      {work ?? 'Click Me'} {removable && <span className={styles.close_icon}>×</span>}
    </button>
  );
}
