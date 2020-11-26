import chai from 'chai'
import divide from '../src/divide.js'

const expect = chai.expect

describe("Test divide.js", () => {
   it("no parameter = 1", () => expect(divide()).to.equal(1));
   it("(2,0) = Infinity", () => expect(divide(2, 0)).to.equal(Infinity));
   it("(0,2) = 0", () => expect(divide(0, 2)).to.equal(0));
   it("(0,0) = NaN", () => expect(divide(0, 0)).to.eql(NaN));

   // Unnecessary since rather tests CreateMathOperation() ?
   it("(undefined, 2) = 2", () => expect(divide(undefined, 2)).to.equal(2));
   it("(3, undefined) = 3", () => expect(divide(3, undefined)).to.equal(3));

   it("(6,4) = 1.5", () => expect(divide(6, 4)).to.equal(1.5));
})