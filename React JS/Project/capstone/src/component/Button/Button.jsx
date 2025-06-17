import styles from './Button.module.css'

export default function Button(props) {
  return (
    <button onClick={() => alert("I clicked")}>
      {props.work || "Click Me"}
    </button>
  );
}
