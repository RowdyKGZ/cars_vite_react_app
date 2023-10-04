/* eslint-disable react/prop-types */

export const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <p className={{ color: "red" }}>Price is required</p>;
};
