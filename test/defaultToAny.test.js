import chai from 'chai'
import defaultToAny from '../src/defaultToAny.js'

const expect = chai.expect

describe("Test defaultToAny.js", () => {

   it("no parameters = undefined", () => expect(defaultToAny()).to.equal(undefined));

   it("(1, 10, 20) -> 1", () => expect(defaultToAny(1, 10, 20)).to.equal(1));
   it("(undefined, 10, 20) -> 10", () => expect(defaultToAny(undefined, 10, 20)).to.equal(10));
   it("(undefined, null, 20) -> 20", () => expect(defaultToAny(undefined, null, 20)).to.equal(20));
   it("(undefined, null, NaN) -> NaN", () => expect(defaultToAny(undefined, null, NaN)).to.eql(NaN));
})