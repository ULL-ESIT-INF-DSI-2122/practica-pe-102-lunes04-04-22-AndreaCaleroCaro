import { Strategy } from "./strategy";

/**
 * EJERCICIO PE 102. Lunes 04 de abril 2022
 * Hemos definido una clase independiente para cada algoritmo identificado. Todas implementan la interfaz Strategy
 * @class BubbleSort que implementa la interfaz Strategy
 */
export class BubbleSort implements Strategy {
    execute(data: number[]) {
      console.log(`Se aplica el algoritmo BubbleSort ${data}`);
    }
}