import chai from 'chai'
import slice from '../src/slice.js'

const expect = chai.expect

describe("Test slice.js. testArray = [1, 2, 3, 4]", () => {
   const testArray = [1, 2, 3, 4];

   it("no parameters = []", () => expect(slice()).to.eql([]));
   it("(testArray, 2, 0) = []", () => expect(slice(testArray, 2, 0)).to.eql([]));

   it("(testArray) = [1, 2, 3, 4]",
      () => expect(slice(testArray)).to.eql([1, 2, 3, 4]));
   it("(testArray, 2, 3) = [3]",
      () => expect(slice(testArray, 2, 3)).to.eql([3]));
   it("(testArray, -3, -1) = [2, 3]",
      () => expect(slice(testArray, -3, -1)).to.eql([2, 3]));
})