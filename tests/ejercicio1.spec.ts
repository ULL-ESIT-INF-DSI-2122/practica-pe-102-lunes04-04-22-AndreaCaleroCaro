import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/solver';
import {Strategy} from '../src/strategy';


describe('Solver', () => {
  it('setStrategy(strategy: Strategy) añade el patrón', () => {
    expect(setStrategy([5,3,4,1,2,7,6])).to.be.equal(undefined);
  });
});