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
    console.log(`Se aplica el algoritmo BubbleSort al array [${data}]`);
    let array_aux = data.slice(); 
    for(let i = 0; i < data.length; i++) {
      for(let j = 0; j < data.length - 1; j++) {
        if(data[j] > data[j + 1]) {
          // Intercambio para ordenar
          let swap = data[j];
          data[j] = data[j + 1];
          data[j + 1] = swap;
        }
      }
    }
    console.log('['+data+']')
    return data;
  }

} //Fin clase

/**
 * Salida por pantalla
 */
const data: number[] = [5,4,6,7,2,1,3]
const bubblesort = new BubbleSort();
bubblesort.execute(data)