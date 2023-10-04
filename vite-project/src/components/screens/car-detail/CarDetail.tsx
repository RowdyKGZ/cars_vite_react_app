import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CarService } from "../../../services/car.service";

import CarItem from "../home/car-item/CarItem";
import styles from "./CarDetail.module.css";
import { withAuth } from "../../HOC/withAuth";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchData = async () => {
      const data = await CarService.getById(id);
      setCar(data);
    };

    fetchData();
  }, [id]);

  if (!car?.title) return <p>Loading</p>;

  return (
    <>
      <div>
        <CarItem car={car} />
      </div>

      <Link className={`btn ${styles.back}`} to="/">
        Back
      </Link>
    </>
  );
};

export default withAuth(CarDetail);
