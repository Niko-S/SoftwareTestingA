import chai from 'chai'
import difference from '../src/difference.js'

const expect = chai.expect

describe("Test difference.js", () => {

   it("([],[1]) = []", () => expect(difference()).to.eql([]));
   it("([2, 1]) = [2,1]", () => expect(difference([2, 1])).to.eql([2,1]));

   it("([2, 1], [2, 3]) = [1]", () => expect(difference([2, 1], [2, 3])).to.eql([1]));
   it("([1,2,3,4], [2, 3]) = [1, 4]", () => expect(difference([1,2,3,4], [2, 3])).to.eql([1,4]));
})