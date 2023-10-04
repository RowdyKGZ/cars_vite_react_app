/* eslint-disable react/prop-types */

function CarPrice({ price }) {
  return (
    <p>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)}
    </p>
  );
}

export default CarPrice;
