import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import CarDetail from "./screens/car-detail/CarDetail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CarDetail />} path="/car/:id" />

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
