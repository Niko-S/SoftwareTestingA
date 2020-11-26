import chai from 'chai'
import isTypedArray from '../src/isTypedArray.js'

const expect = chai.expect



describe("Test isTypedArray.js", () => {

   it("no parameter at all -> error", () => expect(() => isTypedArray()).to.throw());

   it("Is typed array 1", () => expect(isTypedArray(new Uint8Array)).to.equal(true));
   it("Not typed array 1", () => expect(isTypedArray([])).to.equal(false));
   it("Not typed array 2", () => expect(isTypedArray(1)).to.equal(false));
   it("Not typed array 2", () => expect(isTypedArray("1")).to.equal(false));
})