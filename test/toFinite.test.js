import chai from 'chai'
import toFinite from '../src/toFinite.js'

const expect = chai.expect

describe("Test toFinite.js.", () => {
   it("no parameters = 0", () => expect(toFinite()).to.equal(0));

   it("(3.2) = 3.2",
      () => expect(toFinite(3.2)).to.equal(3.2));
   it("(Number.MIN_VALUE) = 5e-324",
      () => expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324));
   it("(Infinity) = 1.7976931348623157e+308",
      () => expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308));
   it("(-Infinity) = -1.7976931348623157e+308",
      () => expect(toFinite(-Infinity)).to.equal(-1.7976931348623157e+308));
   it("('3.2') = 3.2",
      () => expect(toFinite('3.2')).to.equal(3.2));
})