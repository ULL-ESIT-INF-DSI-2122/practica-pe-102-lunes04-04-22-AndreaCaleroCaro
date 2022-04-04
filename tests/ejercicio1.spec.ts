import 'mocha';
import {expect} from 'chai';
import {BubbleSort} from '../src/bubblesort';
import {MergeSort} from '../src/mergesort';

const data: number[] = [5,4,6,7,2,1,3]
const bubblesort = new BubbleSort();
const mergesort = new MergeSort()
/*
const mySolver = new Solver([1, 2, 3], new FirstAlgorithm());
mySolver.logic();

mySolver.setStrategy(new SecondAlgorithm());
mySolver.logic();

mySolver.setStrategy(new ThirdAlgorithm());
mySolver.logic();
*/

describe('BubbleSort algoritmo ordenacion', () => {
  it('execute() ejecuta el algoritmo de ordenacion', () => {
    expect(bubblesort.execute(data)).to.be.eql([ 1, 2, 3, 4, 5, 6, 7 ]);
  });
});

describe('MergeSort algoritmo ordenacion', () => {
  it('execute() ejecuta el algoritmo de ordenacion', () => {
    expect(mergesort.execute(data)).to.be.eql([ 1, 2, 3, 4, 5, 6, 7 ]);
  });
});

