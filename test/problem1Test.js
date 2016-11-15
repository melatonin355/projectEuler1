let chai = require('chai');
let SumRange = require('../problem1.js');

// SumRange Test cases
describe('sumRange', function () {
  it('range 0 to 10 should be 23', function () {
    /** Testing initial input 0,10 */
    chai.assert.equal(23, SumRange(0, 10));
  })

  it('range 50 to 100 should be 1775', function () {
    /** testing 50 to 100 */
    chai.assert.equal(1775, SumRange(50, 100));
  })

  it('range 100 to 10 should be an error', function () {
    /** minimum is larger than maximum
    * we should handle this error gracefully */
    let err = SumRange(100, 10);
    let fn = function () { throw err; }

    chai.expect(fn).to.throw(Error)
  })

  it('range 5.5 to 50.5 should be an error', function () {
    /** invalid input should throw error
    * we could always round up in future implmentations*/
    let err = SumRange(5.5, 50.5);
    let fn = function () { throw err; }

    chai.expect(fn).to.throw(Error)
  })

  it('range -100 to -1 should produce -2418', function () {
    /** negative ranges should produce a result for now
    * depending on requirement we could also produce an error*/
    chai.assert.equal(-2418, SumRange(-100, -1));
  })

})
