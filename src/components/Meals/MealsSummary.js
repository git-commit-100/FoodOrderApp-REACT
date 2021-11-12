import styles from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <div className={styles["summary"]}>
      <h3 className={styles["summary-heading"]}>Yum... Yummm..... Yummmmm !</h3>
      <p className={styles["summary-desc"]}>
        Don't let your budget get in your way to enjoy mouth-watering ,
        lip-smacking and tummy-filling meals. These meals are prepared
        considering all necessary hygenic precautions !
      </p>
      <p className={styles["summary-desc"]}>
        Calm your cravings by having option to choose from about 30 different
        types of cuisines. So what are you waiting for ? Order right now and use
        code "50%OFFER" to get upto 50% discount on your first order.
      </p>
    </div>
  );
}

export default MealsSummary;
