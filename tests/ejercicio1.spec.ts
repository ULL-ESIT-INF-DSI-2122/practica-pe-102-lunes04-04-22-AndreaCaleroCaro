import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/solver';
import {Strategy} from '../src/strategy';


describe('Solver', () => {
  it('logic() añade el patrón', () => {
    expect(logic()).to.be.equal(undefined);
  });
});

