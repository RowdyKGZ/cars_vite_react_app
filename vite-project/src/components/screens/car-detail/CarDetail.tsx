import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CarService } from "../../../services/car.service";

import CarItem from "../home/car-item/CarItem";
import styles from "./CarDetail.module.css";
import { withAuth } from "../../HOC/withAuth";
import { ICar } from "@/vite-project/src/types/car.interface";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState<ICar>({} as ICar);

  // const { data, isLoading, error } = useQuery(["car"], () =>
  //   CarService.getAll()
  // );
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
