import styles from "./Modal.module.css";
import reactDom from "react-dom";
import Card from "./Card";

function Backdrop() {
  return <div className={styles["backdrop"]}></div>;
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
      {reactDom.createPortal(<Backdrop />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
