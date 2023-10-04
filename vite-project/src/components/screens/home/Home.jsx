// import { useMemo } from "react";
import { useContext, useEffect, useState } from "react";

import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/createCarForm";
import { CarService } from "../../../services/car.service";
import { AuthContext } from "../../../providers/AuthProvider";

function Home() {
  // const [search, setSearch] = useState("")

  // const filteredCars = useMemo(
  //   cars.filter((car) => car.price > 50000),
  //   [filter]
  // );
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll();
      setCars(data);
    };

    fetchData();
  }, []);

  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <>
          <h2>Welcome {user.name}</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <button onClick={() => setUser({ name: "ely" })}>Login</button>
      )}

      <h1>Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem car={car} key={car.id} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </>
  );
}

export default Home;
