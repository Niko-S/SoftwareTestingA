import chai from 'chai'
import isBuffer from '../src/isBuffer.js'

const expect = chai.expect


describe("Test isBuffer.js", () => {

   it("no parameter at all -> error", () => expect(() => isBuffer()).to.throw());

   it("Is buffer 1", () => expect(isBuffer(new Buffer(2))).to.equal(true));
   it("Not buffer 1", () => expect(isBuffer("1")).to.equal(false));
   it("Not buffer 2", () => expect(isBuffer(new Uint8Array(2))).to.equal(false));
   it("Not buffer 3", () => expect(isBuffer(null)).to.equal(false));
})