import chai from 'chai'
import reduce from '../src/reduce.js'

const expect = chai.expect

describe("Test reduce.js", () => {
   it("no parameters = undefined",
      () => expect(reduce()).to.equal());

   it("([1, 2], (sum, n) => sum + n, 0) = 3",
      () => expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3));

   it("({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {\n (result[value] || (result[value] = [])).push(key)\n return result\n}, {}) \n= { '1': ['a', 'c'], '2': ['b'] }",
      () => expect(reduce({ 'a': 1, 'b': 2, 'c': 1 },
         (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result
         }, {}))
         .to.eql({ '1': ['a', 'c'], '2': ['b'] }));
})