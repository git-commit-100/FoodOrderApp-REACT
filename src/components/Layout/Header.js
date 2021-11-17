import styles from "./Header.module.css";
import mealsImg from "../../assets/mealsImg.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header-nav"]}>
          <h2 className={styles["brand-name"]}>Store 2 Door</h2>
          <HeaderCartButton onClick={props.onShowCart}/>
        </div>
      </header>
      <div className={styles["banner"]}>
        <img src={mealsImg} draggable="false" alt="A Table Full Of Cuisines !"/>
      </div>
    </>
  );
}

export default Header;
