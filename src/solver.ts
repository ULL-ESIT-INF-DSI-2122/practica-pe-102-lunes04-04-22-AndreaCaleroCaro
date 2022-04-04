import { BubbleSort } from "./bubblesort";
import { MergeSort } from "./mergesort";
import { Strategy } from "./strategy";

/**
 * EJERCICIO PE 102. Lunes 04 de abril 2022
 * 1) Creación @class Solver, hemos sido capaces de identificar diferentes algoritmos.
 */
export class Solver {
  /**
   * @param data array de números 
   * @param strategy implementa la interfaz Strategy
   */
  constructor(private data: number[], private strategy: Strategy) {
  }

  /**
   * Setter que indica la estrategia de algor
   * @param strategy Current strategy applied
   * 4) añadido un setter setStrategy a Solver que nos permite, en tiempo de ejecución, modificar la estrategia aplicada
   */
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Getter de la estrategia a ejecutar con el array de números
   */
  logic() {
    this.strategy.execute(this.data);
  }

} //Fin clase

/**
 * Salida por pantalla
 */
const data: number[] = [5,4,6,7,2,1,3];
const mySolverBubble = new Solver(data, new BubbleSort());
const mySolverMerge = new Solver(data, new MergeSort());
mySolverBubble.setStrategy(new BubbleSort());
mySolverBubble.logic();

mySolverMerge.setStrategy(new MergeSort());
mySolverMerge.logic();
