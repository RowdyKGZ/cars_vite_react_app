/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "../Home.module.css";
import CarPrice from "./CarPrice";
import { ICar } from "@/vite-project/src/types/car.interface";

function CarItem({ car }: { car: ICar }) {
  return (
    <div key={car.id} className={styles.item}>
      <img className={styles.image} src={`${car.image}`} alt="" />
      <div className={styles.info}>
        <h2>{car.title}</h2>
        <CarPrice price={car.price} />
        <Link className="btn" to={`/car/${car.id}`}>
          read more
        </Link>
      </div>
    </div>
  );
}

export default CarItem;
