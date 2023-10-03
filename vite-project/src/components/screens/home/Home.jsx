import CarItem from "./car-item/CarItem";
import { cars } from "./cars.data";

function Home() {
  return (
    <>
      <h1>Cars catalog</h1>
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
