/* eslint-disable react/prop-types */
import styles from "../Home.module.css";

const CarItem = ({ car }) => {
  return (
    <div key={car.id} className={styles.item}>
      <img className={styles.image} src={`./car${car.image}.jpg`} alt="" />
      <div className={styles.info}>
        <h2>{car.title}</h2>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
        <button>read more</button>
      </div>
    </div>
  );
};

export default CarItem;
