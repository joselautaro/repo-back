// Esta funcion para funcionar, necesita resolver el stock por lo tanto, lo importamos aqui dentro
import { stock } from "../data/stock";

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(stock);
        reject("Rechazado");
      }, 500);
    });
  };