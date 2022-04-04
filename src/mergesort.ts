import { Strategy } from "./strategy";

/**
 * EJERCICIO PE 102. Lunes 04 de abril 2022
 * Hemos definido una clase independiente para cada algoritmo identificado. Todas implementan la interfaz Strategy
 * @class MergeSort que implementa la interfaz Strategy
 */
export class MergeSort implements Strategy {
  /**
   * Método public execute que permite iniciar la ejecución de una estrategia.
   * @param data array de números a ordenar
   */
  execute(data: number[]) {
    console.log(`Se aplica el algoritmo MergeSort al array [${data}]`);
    let resultado = this.dividir(data);
    this.dividir(data);
    console.log('['+resultado+']')
    return resultado;
  }
      
  /**
   * Método public para dividir el array en parte central, izq. y dcha.
   * @param data array números
   * @returns el resultado de la función merge que ordena
   */
  public dividir(data: number[]){
    let centro = data.length / 2;
    let izquierda = data.slice(0, centro); //parte izquierda del array
    let derecha = data.slice(centro); //parte derecha del array
    if (centro > 1) {
      izquierda = this.dividir(izquierda);
      derecha = this.dividir(derecha);
    }
    return this.merge(izquierda, derecha);
  }

  /**
   * Método public merge que ejecuta el método de ordenación
   * SE RESPETA EL PRINCIPIO Open-closed de los principios SOLID
   * @param izquierda del array de números
   * @param derecha del array de números
   * @returns el array ordenado
   */
  public merge(izquierda: number[], derecha: number[]){
    let indice_izquierdo: number = 0;
    let indice_derecho: number = 0;
    let resultado: number[] = [];
    while (indice_izquierdo < izquierda.length || indice_derecho < derecha.length) {
      let valor_izquierdo = izquierda[indice_izquierdo];
      let valor_derecho = derecha[indice_derecho];
      if (valor_derecho === undefined) {
        resultado.push(valor_izquierdo);
        indice_izquierdo++;
      } else {
        if (valor_izquierdo <= valor_derecho) {
          resultado.push(valor_izquierdo);
          indice_izquierdo++;
        } else {
          resultado.push(valor_derecho);
          indice_derecho++;
        }
      }
    }
    return resultado;
  }
    
} //Fin clase

/**
 * Salida por pantalla
 */
const data: number[] = [5,4,6,7,2,1,3];
const mergesort = new MergeSort();
mergesort.execute(data);
  