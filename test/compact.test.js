import chai from 'chai'
import compact from '../src/compact.js'

const expect = chai.expect

describe("Test compact.js", () => {

   it("[1,2,3] -> [1,2,3]", () => expect(compact([1,2,3])).to.eql([1,2,3]));
   it("[0, 1, false, 2,  3] -> [1,2,3]", () => expect(compact([0, 1, false, 2, 3])).to.eql([1,2,3]));
   it("[false, 3, false, 0] -> [3]", () => expect(compact([false, 3, false, 0])).to.equal([3]));
   it("[3, false, false, 0] -> [3]", () => expect(compact([3, false, false, 0])).to.equal([3]));
   
})