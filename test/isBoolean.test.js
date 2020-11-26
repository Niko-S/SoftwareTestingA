import chai from 'chai'
import isBoolean from '../src/isBoolean.js'

const expect = chai.expect

describe("Test isBoolean.js", () => {

   it("no parameter at all -> error", () => expect(() => isBoolean()).to.throw());

   it("Is boolean 1", () => expect(isBoolean(true)).to.equal(true));
   it("Is boolean  2", () => expect(isBoolean(false)).to.equal(true));
   it("Not boolean 1", () => expect(isBoolean("1")).to.equal(false));
   it("Not boolean 2", () => expect(isBoolean(null)).to.equal(false));
})