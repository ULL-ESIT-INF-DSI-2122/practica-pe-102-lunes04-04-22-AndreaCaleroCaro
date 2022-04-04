/**
 * EJERCICIO PE 102. Lunes 04 de abril 2022
 * @interface Strategy que implementa la interfaz Strategy
 * 2) Hemos declarado la interfaz Strategy, que contiene operaciones comunes a todas las estrategias
 */
export interface Strategy {
    execute(data: number[]): void;
}