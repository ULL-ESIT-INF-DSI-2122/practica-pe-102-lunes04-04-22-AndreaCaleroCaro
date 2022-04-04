import { Strategy } from "./strategy";

export class BubbleSort implements Strategy {
    execute(data: number[]) {
      console.log(`Se aplica el algoritmo BubbleSort ${data}`);
    }
}