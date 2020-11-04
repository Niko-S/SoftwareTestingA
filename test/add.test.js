import chai from 'chai'
import add from '../src/add.js'

const expect = chai.expect

describe("Test add.js", () => {
   it("1 + 1 = 2", () => expect(add(1, 1)).to.equal(2));
   it("0 + 0 = 0", () => expect(add(0, 0)).to.equal(0));
})
