import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/solver';
import {Strategy} from '../src/strategy';
import {BubbleSort} from '../src/bubblesort';

const data: number[] = [5,4,6,7,2,1,3]
const bubblesort = new BubbleSort();

describe('BubbleSort algoritmo ordenacion', () => {
  it('execute() ejecuta el algoritmo de ordenacion', () => {
    expect(bubblesort.execute(data)).to.be.equal(undefined);
  });
});

