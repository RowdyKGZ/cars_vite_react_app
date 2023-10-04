/* eslint-disable react/prop-types */

import { FC } from "react";

export const ErrorMessage: FC<{ error?: string }> = ({ error }) => {
  if (!error) return null;
  return <p style={{ color: "red" }}>Price is required</p>;
};
