import styles from './Button.module.css'

export default function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.work || "Click Me"}
    </button>
  );
}
