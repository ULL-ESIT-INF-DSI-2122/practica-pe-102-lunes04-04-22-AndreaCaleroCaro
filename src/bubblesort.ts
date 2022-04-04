import { Strategy } from "./strategy";

/**
 * EJERCICIO PE 102. Lunes 04 de abril 2022
 * Hemos definido una clase independiente para cada algoritmo identificado. Todas implementan la interfaz Strategy
 * @class BubbleSort que implementa la interfaz Strategy
 */
export class BubbleSort implements Strategy {
  /**
   * Método public execute que permite iniciar la ejecución de una estrategia.
   * @param data array de números a ordenar
   */
  public execute(data: number[]) {
    console.log(`Se aplica el algoritmo BubbleSort ${data}`);
  }
}