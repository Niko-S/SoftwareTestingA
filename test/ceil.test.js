import chai from 'chai'
import ceil from '../src/ceil.js'

const expect = chai.expect

describe("Test ceil.js", () => {

   it("no parameter at all -> error", () => expect(() => ceil()).to.throw());

   it("6.004, 2 = 6.01", () => expect(ceil(6.004, 2)).to.equal(6.01));
   it("100.567, 1 = 100.6", () => expect(ceil(100.567, 1)).to.equal(100.6));
   it("1500.99, 0 = 1501", () => expect(ceil(1500.99, 0)).to.equal(1501));
})