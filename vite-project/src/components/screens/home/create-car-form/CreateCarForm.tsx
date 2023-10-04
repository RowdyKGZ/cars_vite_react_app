/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

// import { useState } from "react";
import styles from "./createCarForm.module.css";
import { ErrorMessage } from "./ErrorMessage";
import { useCreateCart } from "./useCreateCart";
import { ICarData } from "@/vite-project/src/types/car.interface";

// const clearData = { price: "", name: "", image: "" };

// const CreateCarForm = ({ setCars }) => {
const CreateCarForm = () => {
  // const [data, setData] = useState(clearData);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ICarData>({
    mode: "onChange",
  });

  const { createCar } = useCreateCart(reset);

  // const createCar = (data) => {
  // mutate({ ...data });
  // e.preventDefault();
  // setCars((prev) => {
  //   return [...prev, { id: prev.length + 1, ...data }];
  // });
  // };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <ErrorMessage error={errors?.title?.message} />
      <input
        {...register("title", { required: "Name is requireds" })}
        placeholder="Title"
        // type="text"
        // onChange={(event) => {
        //   setData((prev) => ({ ...prev, name: event.target.value }));
        // }}
        // value={data.name}
      />
      <ErrorMessage error={errors?.price?.message} />
      <input
        placeholder="Price"
        type="text"
        {...register("price", { required: "price is requireds" })}
        // onChange={(event) => {
        //   setData((prev) => ({ ...prev, price: event.target.value }));
        // }}
        // value={data.price}
      />
      <input
        placeholder="Image"
        type="text"
        {...register("image", { required: true })}
        // onChange={(event) => {
        //   setData((prev) => ({ ...prev, image: event.target.value }));
        // }}
        // value={data.image}
      />
      {/* <button className="btn" onClick={(e) => createCar(e)}> */}

      <button className="btn">create</button>
    </form>
  );
};

export default CreateCarForm;
