import chai from 'chai'
import drop from '../src/drop.js'

const expect = chai.expect

describe("Test drop.js", () => {

   it("([]) = []", () => expect(drop([])).to.eql([]));

   it("([1, 2, 3]) = [2,3]", () => expect(drop([1, 2, 3])).to.eql([2, 3]));
   it("([1, 2, 3], 2) = [3]", () => expect(drop([1, 2, 3], 2)).to.eql([3]));
   it("([1, 2, 3], 5) = []", () => expect(drop([1, 2, 3], 5)).to.eql([]));
   it("([1, 2, 3], 0) = [1,2,3]", () => expect(drop([1, 2, 3], 0)).to.eql([1, 2, 3]));
})