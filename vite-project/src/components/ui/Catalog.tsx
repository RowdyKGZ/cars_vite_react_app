/* eslint-disable react/prop-types */
import CarItem from "../screens/home/car-item/CarItem";

function Catalog({ data }) {
  return (
    <div>
      {data.length ? (
        data.map((car) => <CarItem car={car} key={car.id} />)
      ) : (
        <p>There are no cars</p>
      )}
    </div>
  );
}

export default Catalog;
