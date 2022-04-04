import { Strategy } from "./strategy";

export class Solver {
  /**
   * 1) Creación @class Solver, hemos sido capaces de identificar diferentes algoritmos.
   * @param data array de números 
   * @param strategy implementa la interfaz Strategy
   */
  constructor(private data: number[], private strategy: Strategy) {
  }

  /**
   * Setter que indica la estrategia de algor
   * @param strategy Current strategy applied
   */
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  logic() {
    this.strategy.execute(this.data);
  }
}