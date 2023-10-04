import axios from "axios";
import { ICarData } from "../types/car.interface";

export const CarService = {
  async getAll() {
    const response = await axios("http://localhost:3000/cars");
    return response.data;
  },

  async getById(id: string) {
    const response = await axios(`http://localhost:3000/cars?id=${id}`);
    return response.data[0];
  },

  async create(data: ICarData) {
    return axios.post(`http://localhost:3000/cars`, data);
  },
};
