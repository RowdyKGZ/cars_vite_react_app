export interface ICar {
  id: number;
  image: string;
  title: string;
  price: string;
}

export interface ICarData extends Omit<ICar, "id"> {}
