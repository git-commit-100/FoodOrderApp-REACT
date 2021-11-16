import styles from "./Modal.module.css";
import reactDom from "react-dom";
import Card from "./Card";

function Backdrop(props) {
  return <div className={styles["backdrop"]} onClick={props.onClick}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={styles["modal-overlay"]}>
      <Card className={styles["modal-content"]}>{props.children}</Card>
    </div>
  );
}

function Modal(props) {
  const portalElement = document.getElementById("modal");
  return (
    <>
      {reactDom.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
