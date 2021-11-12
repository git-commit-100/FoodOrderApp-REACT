import styles from "./Header.module.css";
import mealsImg from "../../assets/mealsImg.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header-nav"]}>
          <h2 className={styles["brand-name"]}>Food Order</h2>
          <HeaderCartButton />
        </div>
      </header>
      <div className={styles["banner"]}>
        <img src={mealsImg} draggable="false" alt="A Table Full Of Cuisines !"/>
      </div>
    </>
  );
}

export default Header;
