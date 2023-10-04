// import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import CreateCarForm from "./create-car-form/CreateCarForm";

import { CarService } from "../../../services/car.service";

import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";

function Home() {
  // const [search, setSearch] = useState("")

  // const filteredCars = useMemo(
  //   cars.filter((car) => car.price > 50000),
  //   [filter]
  // );
  // const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await CarService.getAll();
  //     setCars(data);
  //   };

  //   fetchData();
  // }, []);
  const { data, isLoading, error } = useQuery(["cars"], () =>
    CarService.getAll()
  );

  if (isLoading) return <p>...Loading</p>;

  return (
    <>
      <Header />

      <h1>Cars catalog</h1>
      {/* <CreateCarForm setCars={setCars} /> */}
      <CreateCarForm />

      <Catalog data={data} />
    </>
  );
}

export default Home;
