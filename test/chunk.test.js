import chai from 'chai'
import chunk from '../src/chunk.js'

const expect = chai.expect

describe("Test chunk.js", () => {

   it("['a','b'], 2 -> ['a','b']", () => expect(chunk([1,2], 2)).to.eql([[1,2]]));
   it("[1], 1 -> [1]", () => expect(chunk([1], 1)).to.eql([[1]]));
})