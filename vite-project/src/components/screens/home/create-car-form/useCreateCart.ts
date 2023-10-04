import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarService } from "../../../../services/car.service";

export const useCreateCart = (reset) => {
  const qeryClient = useQueryClient();

  const { mutate } = useMutation(
    ["create car"],
    (data) => {
      CarService.create(data);
    },
    {
      onSuccess: () => {
        qeryClient.invalidateQueries("cars");
        reset();
      },
    }
  );

  const createCar = (data) => {
    mutate({ ...data });
  };

  return { createCar };
};
