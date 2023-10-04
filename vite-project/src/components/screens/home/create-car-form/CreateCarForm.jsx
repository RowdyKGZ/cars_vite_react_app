/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./createCarForm.module.css";

const clearData = { price: "", name: "", image: "" };

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => {
      return [...prev, { id: prev.length + 1, ...data }];
    });

    setData(clearData);
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        type="text"
        onChange={(event) => {
          setData((prev) => ({ ...prev, name: event.target.value }));
        }}
        value={data.name}
      />
      <input
        placeholder="Price"
        type="text"
        onChange={(event) => {
          setData((prev) => ({ ...prev, price: event.target.value }));
        }}
        value={data.price}
      />
      <input
        placeholder="Image"
        type="text"
        onChange={(event) => {
          setData((prev) => ({ ...prev, image: event.target.value }));
        }}
        value={data.image}
      />

      <button className="btn" onClick={(e) => createCar(e)}>
        create
      </button>
    </form>
  );
};

export default CreateCarForm;
