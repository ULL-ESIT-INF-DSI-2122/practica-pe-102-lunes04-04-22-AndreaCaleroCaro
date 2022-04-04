import { Strategy } from "./strategy";

export class MergeSort implements Strategy {
  execute(data: number[]) {
    console.log(`Se aplica el algoritmo MergeSort al array [${data}]`);
    let resultado = this.dividir(data);
    this.dividir(data);
    console.log('['+resultado+']')
    return resultado;
  }
      
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
    
}

/**
 * Salida por pantalla
 */
const data: number[] = [5,4,6,7,2,1,3];
const mergesort = new MergeSort();
mergesort.execute(data);
  