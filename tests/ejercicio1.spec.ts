import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/solver';
import {BubbleSort} from '../src/bubblesort';
import {MergeSort} from '../src/mergesort';

const data: number[] = [5,4,6,7,2,1,3]
const bubblesort = new BubbleSort();
const mergesort = new MergeSort()
const mySolverBubble = new Solver(data, bubblesort);
const mySolverMerge = new Solver(data, mergesort);


describe('Solver', () => {
  it('setStrategy() setter de la estartegia bubblesort', () => {
    expect(mySolverBubble.setStrategy(bubblesort)).to.be.equal(undefined);
  });
  it('setStrategy() setter de la estartegia mergesort', () => {
    expect(mySolverMerge.setStrategy(mergesort)).to.be.equal(undefined);
  });
  it('logic() getter de la ejecucion de la estartegia', () => {
    expect(mySolverMerge.logic()).to.be.equal(undefined);
  });
});

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

