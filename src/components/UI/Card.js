import styles from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={`${
        props.className
          ? props.className + " " + styles["card"]
          : styles["card"]
      }`}
    >
      {props.children}
    </div>
  );
}

export default Card;
