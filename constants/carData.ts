import {
  amg,
  amgModel,
  corolla,
  corollaModel,
  hilux,
  hiluxModel,
  rav4,
} from "./images";

export const carsData = [
  {
    id: "1",
    title: "Total Cars",
    value: 10,
  },
  {
    id: "2",
    title: "Average car views",
    value: 4,
  },
  {
    id: "3",
    title: "Client Requests",
    value: 9,
  },
];

export const myCars = [
  {
    id: "1",
    name: "Toyota Hilux",
    price: 100,
    coverage: 5,
    imageURL: hilux,
  },
  {
    id: "2",
    name: "RAV 4",
    price: 70,
    coverage: 3,
    imageURL: rav4,
  },
];

export const allCars = [
  {
    id: "1",
    image: hiluxModel,
  },
  {
    id: "2",
    image: amgModel,
  },
  {
    id: "3",
    image: corollaModel,
  },
];

export const recommendedCars = [
  {
    id: "1",
    recommendation: 60,
    imgURL: hiluxModel,
  },
  {
    id: "2",
    recommendation: 50,
    imgURL: amgModel,
  },
];
