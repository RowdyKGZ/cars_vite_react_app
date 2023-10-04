/* eslint-disable react/prop-types */

import { ICar } from "@/vite-project/src/types/car.interface";
import { FC } from "react";

const CarPrice: FC<{ price: string }> = ({ price }) => {
  return (
    <p>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(+price)}
    </p>
  );
};

export default CarPrice;
