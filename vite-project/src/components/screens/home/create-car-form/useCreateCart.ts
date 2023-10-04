import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarService } from "../../../../services/car.service";
import { SubmitHandler, UseFormReset } from "react-hook-form";
import { ICarData } from "@/vite-project/src/types/car.interface";

export const useCreateCart = (reset: UseFormReset<ICarData>) => {
  const qeryClient = useQueryClient();

  const { mutate } = useMutation(
    ["create car"],
    (data: ICarData) => {
      return CarService.create(data);
    },
    {
      onSuccess: () => {
        qeryClient.invalidateQueries(["cars"]);
        reset();
      },
    }
  );

  const createCar: SubmitHandler<ICarData> = (data) => {
    mutate({ ...data });
  };

  return { createCar };
};
